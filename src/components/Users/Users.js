import React from "react";
import s from "./User.module.css";
import User from "./User";


let Users = (props) => {
  // let [loadUsers, setEditMode] = useState("");
  // const loadAlsoUsers = () => {
  //   setEditMode(loadUsers);
  // };
  return (
    <div>
      <div className={s.users_title}>Пользователи</div>
      <div className={s.users}>
        {props.users.map((u, i) => {
          if (u.userId != props.isOwner) {
            return <User u={u} props={props} />
          }
        })}
      </div>
      {/* <div className={s.users__btn}><Button func={loadAlsoUsers} text="LOAD MORE" /></div> */}

    </div>
  );
};

export default Users;
