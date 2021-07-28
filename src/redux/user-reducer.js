
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";
const SET_FOLLOWERS = "SET_FOLLOWERS";
let initialState = {
  users: [],
  currentPage: "1",
  totalPages: "20",
  pageSize: "4",
  isFetching: false,
  followingInProgress: false,
  followingInUserId: [],
};

export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleFetchingAc = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setTotalPagesAc = (totalPages) => ({
  type: SET_TOTAL_COUNT,
  totalPages,
});
export const followingInProgressAC = (followingInProgress) => ({
  type: TOGGLE_FOLLOWING,
  followingInProgress: followingInProgress,
});
export const setFollowersAC = (arr) => ({
  type: SET_FOLLOWERS,
  arr
});
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOWERS:
      return {
        ...state,
        followingInUserId: [...action.arr]
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress,
      };
    default:
      return state;
  }
};

export const getAllUsers = (id) => {
  return (dispatch) => {
    dispatch(toggleFetchingAc(true));
    firebase.firestore().collection('users').get().then((res) => {
      let arr = [];
      res.docs.map((item) => {
        if (item.id != id) {
          arr.push(item.data().xx)
        }
      })

      dispatch(setUsersAc(arr))
      dispatch(toggleFetchingAc(false));
    })
  }
}
export const getFollowers = (isOwner) => {
  return (dispatch) => {
    getFollowersData(isOwner, dispatch)
  }
}
export const getFollowersData = (isOwner, dispatch) => {
  dispatch(followingInProgressAC(true));
  let db = firebase.firestore().collection('users').doc(`${isOwner}`).collection('followers').doc('id');
  db.get().then((docs) => {
    if (docs.exists) {
      let objData = docs.data();
      dispatch(setFollowersAC(objData.arr))
      dispatch(followingInProgressAC(false));
    } else {
      dispatch(followingInProgressAC(false));
    }
  })
}
export const toFollow = (followers, isOwner, userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('followers').doc('id');
    let arrFollowers = [...followers];
    arrFollowers.push(userId);
    db.set({ arr: [...arrFollowers] })
      .then(() => {
        getFollowersData(isOwner, dispatch);
      }).catch(e => console.log(e))
  }
}
export const toUnFollow = (followers, isOwner, userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('followers').doc('id');
    let arrFollowers = followers.filter(item => item != userId);
    db.set({ arr: [...arrFollowers] })
      .then(() => {
        getFollowersData(isOwner, dispatch);
      }).catch(e => console.log(e))
  }
}

export default usersReducer;
