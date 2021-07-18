import React, { useState } from "react";
import s from "./User.module.css";
import User from "./User";
import Pagination from "../common/Paginations/Pagination";
import Button from "../btn/Button";

let Users = (props) => {
  let [loadUsers, setEditMode] = useState(3);
  const loadAlsoUsers = () => {
    setEditMode(loadUsers + 4);
  };

  return (
    <div>
      <div className={s.users_title}>Пользователи</div>
      <div className={s.users}>
        {props.users.map((u, i) => {
          if (i <= loadUsers)
            return <User u={u} props={props} />;
        })}
      </div>
      <div className={s.users__btn}><Button func={loadAlsoUsers} text="LOAD MORE" /></div>

    </div>
  );
};

export default Users;
