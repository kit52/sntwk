import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  updatePosts,
  setProfile,
  getUserProfileStatus,
  updateProfileStatus,



} from "../../redux/profile-reducer";
import { setUserProfile, savePhoto, } from "../../redux/auth-reducer";
import { updateProfile } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.isOwner;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.updatePosts(userId)
    this.props.setUserProfile(this.props.users, userId);
  }

  componentDidMount() {
    console.log(this.props);
    this.refreshProfile();

  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile displayName={this.props.displayName} {...this.props} isOwner={this.props.isOwner} savePhoto={this.props.savePhoto} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userId: state.auth.profile.userId,
    profile: state.auth.profile,
    isOwner: state.auth.isOwner,
    users: state.userPage.users,
    state: state,
    displayName: state.auth.profile.displayName
    // props: { ...state.props },
  };
};
export default compose(
  connect(mapStateToProps, {
    updatePosts,
    updateProfile,
    setProfile,
    setUserProfile,
    getUserProfileStatus,
    updateProfileStatus,
    savePhoto,

  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let ProfileRouterContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setProfile, setUserProfile })(ProfileRouterContainer);
