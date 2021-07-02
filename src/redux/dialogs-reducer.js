import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
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
export const addNewMessageCreator = (newMessageBody) => {
  return { type: ADD_MESSAGE, newMessageBody };
};
export const addMessageData = (data) => {
  return { type: ADD_MESSAGE, data };
};
const dialogsReducer = (state = initialState, action) => {
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
export const loadMessages = (interlocutorId, isOwner, dispatch) => {
  let db3 = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('messages')
    .doc(`${interlocutorId}`).collection('message').orderBy('data', 'desc');
  db3.get().then((res) => {
    let arr = res.docs.map(item => item.data());
    let obj = {
      [interlocutorId]: [...arr]
    }
    dispatch(addMessageData(obj))
  }).catch(e => console.log(e))
}
export const getMessage = (interlocutorId, isOwner) => {
  return (dispatch) => {
    loadMessages(interlocutorId, isOwner, dispatch)
  }
}
export const sendMessage = (newMessage, interlocutorId, isOwner, ownerName, onwerPhoto) => {
  let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('messages').doc(`${interlocutorId}`).collection('message');
  let dbInterlocutor = firebase.firestore().collection('users').doc(`${interlocutorId}/`)
    .collection('messages').doc(`${isOwner}`).collection('message');
  return (dispatch) => {
    db.add({
      data: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL: onwerPhoto,
      name: ownerName,
      message: newMessage,
      userId: isOwner
    }).then(() => {
      dbInterlocutor.add({
        data: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: onwerPhoto,
        name: ownerName,
        message: newMessage,
        userId: isOwner
      }).then(() => {
        loadMessages(interlocutorId, isOwner, dispatch)
        console.log("well");
      })
    })

  }
}
// export const getMessage = (isOwner, interlocutor) => {
//   debugger
//   return (dispatch) => {
//     dispatch(followingInProgressAC(true));
//     let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('followers').doc('id');
//     db.get().then((docs) => {
//       let objData = docs.data();
//       dispatch(setFollowersAC(objData.arr))
//       dispatch(followingInProgressAC(false));
//       console.log(docs);
//     })
//   }
// }
export default dialogsReducer;
