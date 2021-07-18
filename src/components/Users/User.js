import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../btn/Button";
import s from "./User.module.css";
let User = ({ u, props }) => {
  return (
    <div key={u.id} className={s.user}>
      <div className={s.user_container}>
        <div className={s.user_block}>
          <NavLink to={`/Profile/${u.userId}`}>
            <div>
              <img className={s.avatar} src={u.photoURL} alt="avatar" />
            </div>
          </NavLink>
          <div>

            {props.followingInUserId.some((id) => id === u.userId) ? (
              <Button
                class={s.follow__btn}
                disabled={props.followingInProgress}
                func={() => {
                  props.toUnFollow(props.followingInUserId, props.isOwner, u.userId);
                }}
                text="Отписаться"
              />
            ) : (
              <Button
                class={s.follow__btn}
                disabled={props.followingInProgress}
                func={() => {
                  props.toFollow(props.followingInUserId, props.isOwner, u.userId);
                }}
                text="Подписаться"
              />
            )}
          </div>
        </div>
        <div>
          <NavLink to={`/Profile/${u.userId}`}>
            <div>{u.displayName}</div>

          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default User;
