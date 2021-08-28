import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { reset } from "redux-form";
const ADD_MESSAGE = "ADD-MESSAGE";
const FETCHING = "FETCHING";
let initialState = {
  dialogsData: [
    { name: "Alex", id: "1" },
    { name: "Ksenya", id: "2" },
    { name: "Kirill", id: "3" },
  ],
  messageData: {},
  newMessageBody: "",
  Fetching: false
};

export const addMessageData = (data) => {
  return { type: ADD_MESSAGE, data };
};
export const setIsFetchingStatus = (bool) => {
  return { type: FETCHING, bool };
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messageData: { ...state.massageData, ...action.data },
      };
    case FETCHING:
      return {
        ...state,
        Fetching: action.bool
      }
    default:
      return state;
  }
};


export const loadMessages = (interlocutorId, isOwner, n) => {
  let db3 = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('messages')
    .doc(`${interlocutorId}`).collection('message').orderBy('data', 'desc').limit(n);
  return (dispatch) => {
    dispatch(setIsFetchingStatus(true))
    db3.onSnapshot((snapshot) => {
      let arr = [];
      snapshot.docs.map(item => {
        arr.push(item.data())
      })
      let data = {
        [interlocutorId]: arr.reverse()
      }
      dispatch(addMessageData(data))
      dispatch(setIsFetchingStatus(false))
    })

  }

}

export const sendMessage = (newMessage, interlocutorId, isOwner, ownerName) => {
  let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('messages').doc(`${interlocutorId}`).collection('message');
  let dbInterlocutor = firebase.firestore().collection('users').doc(`${interlocutorId}/`)
    .collection('messages').doc(`${isOwner}`).collection('message');
  return (dispatch) => {
    db.add({
      data: firebase.firestore.FieldValue.serverTimestamp(),
      name: ownerName,
      message: newMessage,
      userId: isOwner
    }).then(() => {
      dbInterlocutor.add({
        data: firebase.firestore.FieldValue.serverTimestamp(),
        name: ownerName,
        message: newMessage,
        userId: isOwner
      }).then(() => {
        dispatch(reset("newMessage"))
      })
    })

  }
}

export default dialogsReducer;
