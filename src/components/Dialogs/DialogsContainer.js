import React from "react";
import Dialogs from "./Dialogs";
import { getFollowingInUserId } from "../../redux/user-selectors";
import { getAllUsers, getFollowers } from "../../redux/user-reducer";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageBody: state.dialogsPage.newMessageBody,
    messageData: state.dialogsPage.messageData,
    followingInUserId: getFollowingInUserId(state),
    users: state.userPage.users,
    isOwner: state.auth.isOwner
  };
};

class DialogsContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getAllUsers();
    this.props.getFollowers(this.props.isOwner)
  }
  render() {
    return <Dialogs props={this.props} />
  }
}

export default compose(
  connect(mapStateToProps, { getFollowers, getAllUsers }),
  withRouter,
  withAuthRedirect
)(DialogsContainer);
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// let DialogsAuthRedirectContainer = withAuthRedirect(DialogsContainer);
// export default DialogsAuthRedirectContainer;
