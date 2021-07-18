import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className={props.path == `/Dialogs/${props.id}` ? s.dialog + " " + s.selectedItem : s.dialog}>
      <NavLink to={"/Dialogs/" + props.id}>
        <div className={s.dialogItem_content}><img className={s.avatar} src={props.photo} alt="icon" />{props.name}</div>
      </NavLink>
    </div>
  );
};
export default DialogItem;