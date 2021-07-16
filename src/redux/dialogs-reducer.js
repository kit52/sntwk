import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import { reset } from "redux-form";
const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
  dialogsData: [
    { name: "Alex", id: "1" },
    { name: "Ksenya", id: "2" },
    { name: "Kirill", id: "3" },
  ],
  messageData: { "12321": { text: "sdsa" } },
  newMessageBody: "",
};

export const addMessageData = (data) => {
  return { type: ADD_MESSAGE, data };
};
const dialogsReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: { ...state.massageData, ...action.data },
      };
    default:
      return state;
  }
};


export const loadMessages = (interlocutorId, isOwner) => {
  let db3 = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('messages')
    .doc(`${interlocutorId}`).collection('message').orderBy('data', 'desc').limit(4);
  return (dispatch) => {
    db3.onSnapshot((snapshot) => {
      let arr = [];
      snapshot.docs.map(item => {
        arr.push(item.data())
      })
      console.log(arr);
      let data = {
        [interlocutorId]: arr
      }
      dispatch(addMessageData(data))
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
        console.log("well");
      })
    })

  }
}

export default dialogsReducer;
