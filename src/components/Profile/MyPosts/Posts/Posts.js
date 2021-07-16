import React from "react";
import s from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={s.item}>
      <div className={s.item_iconContainer}>
        <img
          src={props.avatar}
          className={s.icon}
          alt="avatar"
        />
      </div>
      <div><div className={s.item_time}>{props.time}</div><div className={s.item_text}>{props.message}</div></div>
    </div>
  );
};
export default Posts;
