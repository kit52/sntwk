import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";



const Header = (props) => {

  console.log(props);

  return (
    <header className={s.header}>

      <div className={s.header_container}>
        <div className={s.header_nav}>
          <div className={s.header_logo}>MOLOKO</div>
          <Nav />
        </div>
        <NavLink to="/Profile" className={s.header_user}>
          <img
            className={s.header__icon}
            src={props.photoOwner || "https://e7.pngegg.com/pngimages/593/357/png-clipart-computer-icons-human-resources-human-capital-human-resource-miscellaneous-company.png"}
            alt="icon"
          />
          <p className={s.header_userText}>Привет, {props.OwnerName}</p>
          <div>^</div>
        </NavLink>

      </div>
    </header>
  );
};
export default Header;
