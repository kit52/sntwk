import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
let User = ({ u, props }) => {
  console.log(u);
  console.log(props);
  return (
    <div key={u.id} className={s.user}>
      <span>
        <NavLink to={`/Profile/${u.userId}`}>
          <div>
            <img src={u.photoURL} />
          </div>
        </NavLink>
        <div>
          {u.followed ? (
            <button
              disabled={props.followingInUserId.some((id) => id === u.userId)}
              onClick={() => {
                props.unfollowing(u.userId);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInUserId.some((id) => id === u.userId)}
              onClick={() => {
                props.following(u.userId);
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
