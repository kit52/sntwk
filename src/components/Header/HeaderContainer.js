import React from "react";
import { connect } from "react-redux";
import { authMe, setUserAuthAC } from "../../redux/auth-reducer";
import Header from "./Header";

import { logout } from "../../redux/auth-reducer";
import { login2 } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)

  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photoURL,
    isAnonymous: state.auth.isAnonymous,
    userId: state.auth.userId,
    state: state
  };
};

export default connect(mapStateToProps, { setUserAuthAC, logout, login2 })(HeaderContainer);
