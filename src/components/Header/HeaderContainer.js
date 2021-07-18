import React from "react";
import { connect } from "react-redux";
import { setUserAuthAC } from "../../redux/auth-reducer";
import Header from "./Header";

import { logout } from "../../redux/auth-reducer";
import { login2 } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoOwner: state.auth.photoOwner,
    isAnonymous: state.auth.isAnonymous,
    userId: state.auth.userId,
    OwnerName: state.auth.OwnerName
  };
};

export default connect(mapStateToProps, { setUserAuthAC, logout, login2 })(HeaderContainer);
