import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
let User = ({ u, props }) => {
  return (
    <div key={u.id} className={s.user}>
      <span>
        <NavLink to={`/Profile/${u.userId}`}>
          <div>
            <img src={u.photoURL} />
          </div>
        </NavLink>
        <div>
          {props.followingInUserId.some((id) => id === u.userId) ? (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                props.toUnFollow(props.followingInUserId, props.isOwner, u.userId);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress}
              onClick={() => {
                props.toFollow(props.followingInUserId, props.isOwner, u.userId);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <NavLink to={`/Profile/${u.userId}`}>
          <div>{u.displayName}</div>

        </NavLink>
      </span>
    </div>
  );
};

export default User;
