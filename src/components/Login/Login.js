import React from "react";
import { login2, loginTest } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import s from "./Login.module.css";
import Button from "../btn/Button";


const Login = (props) => {
  if (!props.isAnonymous) {
    return <Redirect to="/Profile" />;
  }
  return (
    <div className={s.login}>
      <div className={s.login__container}>
        <div>
          <h1>Для использования сервиса вам необходимо авторизоваться</h1>
        </div>
        <Button text="Войти через Google" func={props.login2} class={s.login_btn} />
        <Button text="Тестовый вход" func={props.loginTest} class={s.login_btn + " " + s.login_test} />
        <div>Пароль для тестового входа : <span>R1e2a3C4T5</span></div>
      </div>
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

export default connect(mapStateToProps, { login2, loginTest })(Login);
