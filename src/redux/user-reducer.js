import userApi from "../components/Api/userApi";
import followApi from "../components/Api/followApi";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
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
  isFetching: true,
  followingInProgress: false,
  followingInUserId: [],
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
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
  debugger
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
      debugger;
      return {
        ...state,
        followingInProgress: action.followingInProgress,
      };
    default:
      return state;
  }
};

export const getAllUsers = () => {
  debugger
  return (dispatch) => {
    dispatch(toggleFetchingAc(true));
    firebase.firestore().collection('users').get().then((res) => {
      let arr = []; res.docs.map(item => arr.push(item.data().xx));
      dispatch(setUsersAc(arr))
      dispatch(toggleFetchingAc(false));
    })
  }
}
export const getFollowers = (isOwner) => {
  debugger
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    let db = firebase.firestore().collection('users').doc(`${isOwner}`).collection('followers').doc('id');
    db.get().then((docs) => {
      let objData = docs.data();
      console.log(docs);
      dispatch(setFollowersAC(objData.arr))
      dispatch(followingInProgressAC(false));
      console.log(docs);
    })
  }
}
export const toFollow = (followers, isOwner, userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('followers').doc('id');
    let arrFollowers = [...followers];
    arrFollowers.push(userId);
    console.log(arrFollowers);
    db.set({ arr: [...arrFollowers] })
      .then(() => {
        db.get().then((docs) => {
          let objData = docs.data();
          console.log(objData);
        })
        dispatch(followingInProgressAC(false));
      }).catch(e => console.log(e))
  }
}
export const toUnFollow = (followers, isOwner, userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true));
    let db = firebase.firestore().collection('users').doc(`${isOwner}/`).collection('followers').doc('id');
    let arrFollowers = followers.filter(item => item != userId);

    console.log(arrFollowers);
    db.set({ arr: [...arrFollowers] })
      .then(() => {
        db.get().then((docs) => {
          let objData = docs.data();
          console.log(objData);
        })
        dispatch(followingInProgressAC(false));
      }).catch(e => console.log(e))
  }
}
// export const requestUsers = (currentPage, pageSize) => {
//   return (dispatch) => {
//     dispatch(toggleFetchingAc(true));
//     userApi.getUsers(currentPage, pageSize).then((data) => {
//       dispatch(toggleFetchingAc(false));
//       dispatch(setUsersAc(data.items));
//       dispatch(setTotalPagesAc(data.totalCount));
//     });
//   };
// };
// export const following = (userId) => {
//   return (dispatch) => {
//     dispatch(followingInProgressAC(true, userId));
//     followApi.doFollow(userId).then((data) => {
//       if (data.resultCode === 0) {
//         dispatch(followAC(userId));
//         dispatch(followingInProgressAC(false, userId));
//       }
//     });
//   };
// };
// export const unfollowing = (userId) => {
//   return (dispatch) => {
//     dispatch(followingInProgressAC(true, userId));
//     followApi.doUnfollow(userId).then((data) => {
//       if (data.resultCode === 0) {
//         dispatch(unfollowAC(userId));
//         dispatch(followingInProgressAC(false, userId));
//       }
//     });
//   };
// };
export default usersReducer;
