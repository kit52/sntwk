import React from "react";
import s from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src={props.avatar}
        className={s.icon}
        alt="avatar"
      />
      {props.message}
    </div>
  );
};
export default Posts;
