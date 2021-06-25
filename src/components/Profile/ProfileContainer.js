import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  updatePosts,
  setProfile,
  setUserProfile,
  getUserProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile

} from "../../redux/profile-reducer";
import { updateProfile } from "../../redux/auth-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  // refreshProfile() {
  //   let userId = this.props.match.params.userId;
  //   if (!userId) {

  //     userId = this.props.userId;
  //     if (!userId) {
  //       this.props.history.push("/login");
  //     }
  //   }
  // this.props.setUserProfile(userId);
  //   this.props.getUserProfileStatus(userId);
  // }
  componentDidMount() {
    let id = this.props.userId;
    console.log(this.props);
    // this.refreshProfile();
    this.props.updatePosts(id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userId: state.auth.userId,
    profile: state.auth

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
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let ProfileRouterContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setProfile, setUserProfile })(ProfileRouterContainer);
