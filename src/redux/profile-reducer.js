import ProfileApi from "../components/Api/profileApi";
import firebase from "../firebase";
import 'firebase/auth';
import 'firebase/storage';
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
      time: `${time.getDate()}.${mount}.${time.getFullYear()}`
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
