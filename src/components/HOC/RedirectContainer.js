import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isAnonymous: state.auth.isAnonymous
  };
};
const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAnonymous) {
        return <Redirect to={"/login"} />;
      } else {
        return <Component {...this.props} />;
      }
    }
  }
  let withAuthRedirectContainer = connect(mapStateToProps)(RedirectComponent);
  return withAuthRedirectContainer;
};
export default withAuthRedirect;