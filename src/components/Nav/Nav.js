import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName={s.active}>
          Сообщения
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Users" activeClassName={s.active}>
          Пользователи
        </NavLink>
      </div>
      {/* <div className={s.item}>
          <a href="#">News</a>
        </div>
        <div className={s.item}>
          <a href="#">Music</a>
        </div>
        <div className={s.item}>
          <a href="#">Settings</a>
        </div> */}
    </nav>
  );
};
export default Nav;
