import firebase from "../firebase";


const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_ANONYMOUS = "SET_IS_ANONYMOUS";
const SET_OWNER_PHOTO = "SET_OWNER_PHOTO";
const SET_OWNER_NAME = "SET_OWNER_NAME";
const SET_OWNER_USER = "SET_OWNER_USER";
let initialState = {
  profile: {
    login: null,
    name: null,
    displayName: "user",
    email: null,
    userId: null,
    photoURL: null,
    isAuth: false,

  },
  ownerName: null,
  isAnonymous: true,
  isOwner: null,
  photoOwner: null,
};

const db = firebase.firestore();

const getData = (dispatch, userId) => {
  db.collection('users').doc(userId).get().then((docs) => {
    let objData = docs.data();
    dispatch(setUserAuthAC(objData.xx));
    dispatch(setOwnerPhoto(objData.xx.photoURL))
  })
}
export const setUserAuthAC = (data) => {
  return { type: SET_USER_DATA, data };
};
export const setIsOwner = (userId, name) => {
  return { type: SET_OWNER_USER, userId, name };
};
export const setUserProfile = (users, userId) => {
  return (dispatch) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].userId === userId) {
        dispatch(setUserAuthAC(users[i]))
      }
    }
  };
};
export const setOwnerPhoto = (photo) => {
  return { type: SET_OWNER_PHOTO, photo };
}

export const isAnonymous = (bool) => {
  return { type: SET_IS_ANONYMOUS, bool };
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        profile: { ...action.data },
      };

    case SET_IS_ANONYMOUS:
      return {
        ...state,
        isAnonymous: action.bool,
      };
    case SET_OWNER_USER:
      return {
        ...state,
        isOwner: action.userId,
        ownerName: action.name,
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



export const updateProfile = (profile, data, userId) => {
  return (dispatch) => {
    db.collection('users').doc(userId).update({ xx: { ...profile, ...data } }).then(() => {
      getData(dispatch, userId);
    }).catch(console.log("getDataError"))
  }
}

export const savePhoto = (data, userId, file) => {
  return (dispatch) => {
    const filePath = firebase.auth().currentUser.uid + '/' + "x";
    return firebase.storage().ref(filePath).put(file).then(function (fileSnapshot) {
      return fileSnapshot.ref.getDownloadURL().then((url) => {
        db.collection('users').doc(userId).update({ xx: { ...data, photoURL: url } }).then(() => {
          getData(dispatch, userId);
        })
      });
    }).catch(function (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    });
  };
};

// LOGIN & logout
export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => {
      let resetObj = {
        profile: {
          displayName: "user",
          name: null,
          email: null,
          userId: null,
          photoURL: null,
          status: null,
          lookingForAJob: false,
          lookingForAJobDescription: null,
          aboutMe: null,
        },
        photoOwner: null,
        isOwner: null,
        OwnerName: null,
        isAnonymous: true
      }
      dispatch(setUserAuthAC(resetObj));
      dispatch(setIsOwner(null, null));
      dispatch(isAnonymous(true))
      dispatch(setOwnerPhoto(null))
    })

  }
};

export const loginTest = () => {
  return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.setCustomParameters({
      'login_hint': 'accaountt3@gmail.com',
      "password_hint": "R1e2a3C4T5"
    });
    firebase.auth().signInWithPopup(provider).then((result) => {
      let data = result.user;
      db.collection('users').get().then((res => {
        let someId = res.docs.some((item) => item.id == data.uid)
        if (someId) {
          getData(dispatch, data.uid);
          dispatch(setIsOwner(data.uid, data.displayName));
          dispatch(isAnonymous(false))
        } else {
          let ref = db.collection('users').doc(`${data.uid}`);
          ref.set({
            xx: {
              displayName: data.displayName,
              name: null,
              email: data.email,
              userId: data.uid,
              photoURL: data.photoURL,
              status: null,
              lookingForAJob: false,
              lookingForAJobDescription: null,
              aboutMe: null,
            }
          }).then(() => {
            getData(dispatch, data.uid);
            dispatch(setIsOwner(data.uid, data.displayName))
            dispatch(setOwnerPhoto(data.photoURL))
            dispatch(isAnonymous(false))
          })
        }
      }))
    }).catch(e => console.log(e))
  };
}
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
          dispatch(setIsOwner(data.uid, data.displayName));
          dispatch(isAnonymous(false))
        } else {
          let ref = db.collection('users').doc(`${data.uid}`);
          ref.set({
            xx: {
              displayName: data.displayName,
              name: null,
              email: data.email,
              userId: data.uid,
              photoURL: data.photoURL,
              status: null,
              lookingForAJob: false,
              lookingForAJobDescription: null,
              aboutMe: null,
            }
          }).then(() => {
            getData(dispatch, data.uid);
            dispatch(setIsOwner(data.uid, data.displayName))
            dispatch(setOwnerPhoto(data.photoURL))
            dispatch(isAnonymous(false))
          })
        }
      }))
    }).catch(e => console.log(e))
  };
};
export default authReducer;
