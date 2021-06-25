import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { login2 } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import s from "./Login.module.css";
import style from "../common/FormControl/FormControl.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const Login = (props) => {
  const classes = useStyles();

  if (!props.isAnonymous) {
    return <Redirect to="/Profile" />;
  }
  return (
    <div className={s.login}>

      <Button
        onClick={props.login2}
        size="verybig"
        variant="contained"
        style={{ color: green[700] }}
        className={classes.margin}
      >
        Login with google
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    isAnonymous: state.auth.isAnonymous
  };
};

export default connect(mapStateToProps, { login2 })(Login);
