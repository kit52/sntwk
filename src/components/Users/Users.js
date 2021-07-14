import React, { useState } from "react";
import s from "./User.module.css";
import User from "./User";
import Pagination from "../common/Paginations/Pagination";

let Users = (props) => {
  let [loadUsers, setEditMode] = useState(3);
  const loadAlsoUsers = () => {
    setEditMode(loadUsers + 4);
  };

  return (
    <div>
      {props.users.map((u, i) => {
        if (i <= loadUsers)
          return <User u={u} props={props} />;
      })}
      <button className={s.users__btn} onClick={loadAlsoUsers}>LOAD MORE</button>
    </div>
  );
};

export default Users;
