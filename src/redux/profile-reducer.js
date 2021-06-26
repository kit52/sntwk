import ProfileApi from "../components/Api/profileApi";
import { setUserAuthAC } from "./auth-reducer";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_PHOTO_SUCSSES = "SET_PHOTO_SUCSSES";
const db = firebase.firestore();
let initialState = {
  postData: [
    { message: "Hey how are you?" },
    { message: "Say some1" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};


// export const addPost = (userId) => {
//   return (dispatch) => {
//     db.collection('users').doc(`${userId}/posts`).set(
//       "traalala"
//     )
//   }
// }



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
  debugger;
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
      // let newPost = {
      //   id: action.data.seconds,
      //   likeCount: 0,
      //   message: action.text,
      // };

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
export const getPost = (userId) => {
  debugger
  return (dispatch) => {
    let db = firebase.firestore().collection('users').doc(`${userId}/`).collection('posts').orderBy('data', 'desc')
      .limit(12);
    db.get().then((res) => {
      debugger
      let arr = res.docs.map(item => item.data());
      dispatch(addPostAC(arr))
    })
  }
}
export const addPost = (userId, text) => {
  return (dispatch) => {
    firebase.firestore().collection('users').doc(`${userId}/`).collection('posts').add({
      data: firebase.firestore.FieldValue.serverTimestamp(),
      message: text
    })
      .then(() => {
        dispatch(getPost(userId))
      })
  }
}
export const updatePosts = (userId) => {
  debugger;
  return (dispatch) => {
    debugger;
    dispatch(getPost(userId))
  }
}

export const savePhoto = (file) => {
  return (dispatch) => {
    ProfileApi.savePhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
      }
    });
  };
};
export const getUserProfileStatus = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfileStatus(userId).then((data) => {
      dispatch(setProfileStatus(data));
    });
  };
};
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    ProfileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};


export default profileReducer;
