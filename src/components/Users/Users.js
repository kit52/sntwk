import React, { useState } from "react";
import s from "./User.module.css";
import User from "./User";
import Pagination from "../common/Paginations/Pagination";

let Users = (props) => {
  let [loadUsers, setEditMode] = useState(3);
  const loadAlsoUsers = () => {
    setEditMode(loadUsers + 4);
  };
  // let users = [];
  // for (let i = 0; i < loadUsers; i++) {
  //   users.push(props.users[i])
  //   console.log(props.users);
  // }
  return (
    <div>
      {/* {users.map((u) => {
        console.log(u)
        return <User u={u} props={props} />
      })}
      <button onClick={loadAlsoUsers}>LOAD MORE</button> */}
      {/* <Pagination props={props}/> */}
      {props.users.map((u, i) => {
        if (i <= loadUsers)
          return <User u={u} props={props} />;
      })}
      <button className={s.users__btn} onClick={loadAlsoUsers}>LOAD MORE</button>
    </div>
  );
};

export default Users;
