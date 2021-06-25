import { stopSubmit } from "redux-form";
import authApi from "../components/Api/authApi";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
let initialState = {
  login: null,
  name: null,
  displayName: "user",
  email: null,
  userId: null,
  photoURL: null,
  isAuth: false,
  isAnonymous: true,
  followingUserId: [],
  posts: []
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


const authReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
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
        followingUserId: [],
        posts: []
      }
      dispatch(setUserAuthAC(resetObj));
    })

  }
};


export const login2 = () => {
  return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then((result) => {

      let data = result.user;
      db.collection('users').get().then((res => {
        let someId = res.docs.some((item) => item.id == data.uid)
        if (someId) {
          getData(dispatch, data.uid);
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
              followingUserId: [],
              posts: []
            }
          }).then(() => {
            getData(dispatch, data.uid);
          })
        }
      }))
    }).catch(e => console.log(e))
  };
};
export default authReducer;
