import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAc,
  setTotalPagesAc,
  setCurrentPageAc,
  toggleFetchingAc,
  followingInProgressAC,
  requestUsers,
  following,
  unfollowing,
  getAllUsers,
  toFollow,
  getFollowers,
  toUnFollow
} from "../../redux/user-reducer";
import {
  getUsers,
  getCurrentPage,
  getTotalPages,
  getPageSize,
  getIsFetching,
  getFollowingInProgress,
  getFollowingInUserId,
} from "../../redux/user-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    followingInUserId: getFollowingInUserId(state),
    isOwner: state.auth.isOwner,

  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    toFollow: (followers, isOwner, userId) => {
      dispatch(toFollow(followers, isOwner, userId))
    },
    toUnFollow: (followers, isOwner, userId) => {
      dispatch(toUnFollow(followers, isOwner, userId))
    },
    getAllUsers: () => {
      dispatch(getAllUsers())
    },
    getFollowers: (isOwner) => {
      dispatch(getFollowers(isOwner))
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAc(currentPage));
    },
    setTotalPages: (totalPages) => {
      dispatch(setTotalPagesAc(totalPages));
    },
    toggleFetching: (isFetching) => {
      dispatch(toggleFetchingAc(isFetching));
    },
    toggleFollowingInProgress: (followingInProgress, id) => {
      dispatch(followingInProgressAC(followingInProgress, id));
    },
    // requestUsers: (currentPage, pageSize) => {
    //   dispatch(requestUsers(currentPage, pageSize));
    // },

  };
};
class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getFollowers(this.props.isOwner)

  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.followingInUserId.length != this.props.followingInUserId.length) {
  //     console.log(prevProps.followingInUserId);
  //     console.log(this.props.followingInUserId);
  //     this.props.getFollowers(this.props.isOwner)
  //   }
  // }
  // onPageChanged = (pageNumber) => {
  //   this.props.setCurrentPage(pageNumber);
  // };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          isOwner={this.props.isOwner}
          toFollow={this.props.toFollow}
          toUnFollow={this.props.toUnFollow}
          state={this.props.state}
          totalPages={this.props.totalPages}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          followingInUserId={this.props.followingInUserId}
          following={this.props.following}
          unfollowing={this.props.unfollowing}
        />
      </>
    );
  }
}
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UserContainer);

// const UsersContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserContainer);
// let UsersRedirectContainer = withAuthRedirect(UsersContainer);
// export default UsersRedirectContainer;
