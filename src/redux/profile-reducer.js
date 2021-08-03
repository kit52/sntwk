
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/storage';
import { reset } from "redux-form";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_PHOTO_SUCSSES = "SET_PHOTO_SUCSSES";

let initialState = {
  postData: [
    { message: "Hey how are you?" },
    { message: "Say some1" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};


export const addPostAC = (arr) => ({
  type: ADD_POST,
  arr
});

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};
export const setPhoto = (file) => {
  return {
    type: SET_PHOTO_SUCSSES,
    file,
  };
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO_SUCSSES: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.file },
      };
    }
    case ADD_POST: {
      return {
        ...state,
        postData: [...action.arr],

      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_PROFILE_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};
export const getPost = (userId, n = 12) => {
  return (dispatch) => {
    let db = firebase.firestore().collection('users').doc(`${userId}/`).collection('posts').orderBy('data', 'desc')
      .limit(n);
    db.get().then((res) => {
      let arr = res.docs.map(item => item.data());
      dispatch(addPostAC(arr))
    })
  }
}
export const addPost = (userId, text) => {
  return (dispatch) => {
    let time = new Date();
    let mount;
    if ((time.getMonth() + 1) >= 10) {
      mount = (time.getMonth() + 1)
    } else {
      mount = 0 + `${(time.getMonth() + 1)}`
    }
    firebase.firestore().collection('users').doc(`${userId}/`).collection('posts').add({
      data: firebase.firestore.FieldValue.serverTimestamp(),
      message: text,
      time: `${time.getDate()}.${mount}.${time.getFullYear()}`,
      serverTime: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(() => {
        dispatch(getPost(userId))
        dispatch(reset("addPostForm"))
      })
  }
}
export const updatePosts = (userId) => {
  return (dispatch) => {
    dispatch(getPost(userId))
  }
}



export default profileReducer;
