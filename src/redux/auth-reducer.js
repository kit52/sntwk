import { stopSubmit } from "redux-form";
import authApi from "../components/Api/authApi";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";

const SET_USER_DATA = "SET_USER_DATA";

const SET_OWNER_PHOTO = "SET_OWNER_PHOTO";
const SET_OWNER_USER = "SET_OWNER_USER";
let initialState = {
  login: null,
  name: null,
  displayName: "user",
  email: null,
  userId: null,
  photoURL: null,
  isAuth: false,
  isAnonymous: true,
  isOwner: null,
  photoOwner: null,
};

const db = firebase.firestore();

const getData = (dispatch, userId) => {
  db.collection('users').doc(userId).get().then((docs) => {
    let objData = docs.data();
    dispatch(setUserAuthAC(objData.xx));
  })
}
export const setUserAuthAC = (data) => {

  return { type: SET_USER_DATA, data };
};
export const setIsOwner = (userId) => {
  return { type: SET_OWNER_USER, userId };
};
export const setUserProfile = (users, userId) => {
  debugger
  return (dispatch) => {
    debugger
    for (let i = 0; i < users.length; i++) {
      if (users[i].userId === userId) {
        console.log(i);
        console.log(users)
        dispatch(setUserAuthAC(users[i]))
      }
    }
    debugger
  };
};
export const setOwnerPhoto = (photo) => {
  return { type: SET_OWNER_PHOTO, photo };
}
const authReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_OWNER_USER:
      return {
        ...state,
        isOwner: action.userId,
      };
    case SET_OWNER_PHOTO:
      return {
        ...state,
        photoOwner: action.photo,
      };

    default:
      return state;
  }
};



export const updateProfile = (data, userId) => {
  return (dispatch) => {
    db.collection('users').doc(userId).update({ xx: { ...data } }).then(() => {
      getData(dispatch, userId);
    }).catch(console.log("getDataError"))
  }
}

// LOGIN & logout
export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => {
      let resetObj = {
        displayName: "user",
        name: null,
        email: null,
        userId: null,
        photoURL: null,
        bigPhoto: null,
        status: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        aboutMe: null,
        isAnonymous: true,
        isOwner: null,
        photoOwner: null
      }
      dispatch(setUserAuthAC(resetObj));
      dispatch(setIsOwner(null))
      dispatch(setOwnerPhoto(null))
    })

  }
};


export const login2 = () => {
  return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result);
      let data = result.user;
      db.collection('users').get().then((res => {
        let someId = res.docs.some((item) => item.id == data.uid)
        if (someId) {
          getData(dispatch, data.uid);
          dispatch(setIsOwner(data.uid));
          dispatch(setOwnerPhoto(data.photoURL))
        } else {
          let ref = db.collection('users').doc(`${data.uid}`);
          debugger
          ref.set({
            xx: {
              displayName: data.displayName,
              name: null,
              email: data.email,
              userId: data.uid,
              photoURL: data.photoURL,
              bigPhoto: null,
              status: null,
              lookingForAJob: false,
              lookingForAJobDescription: null,
              aboutMe: null,
              isAnonymous: false,
            }
          }).then(() => {
            getData(dispatch, data.uid);
            dispatch(setIsOwner(data.uid))
            dispatch(setOwnerPhoto(data.photoURL))
          })
        }
      }))
    }).catch(e => console.log(e))
  };
};
export default authReducer;
