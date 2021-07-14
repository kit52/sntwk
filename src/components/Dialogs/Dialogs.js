import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

import MessageContainer from "./Message/Messages";



const Dialogs = ({ props }) => {

  // useEffect(() => {
  //   if (props.users.length == 0) {
  //     props.getAllUsers();
  //     props.getFollowers(props.isOwner)
  //   }

  // });


  let followers = [];
  for (let i of props.followingInUserId) {
    for (let j of props.users) {
      if (i == j.userId) {
        followers.push(j);
      }
    }
  }

  let dialogsElements = followers.map((d) => (
    <DialogItem
      photo={d.photoURL} name={d.displayName} id={d.userId} path={props.location.pathname} />
  ));

  let interlocutorId = props.location.pathname.slice(9);
  let interlocutorIndex = props.users.findIndex((item) => {
    if (item.userId === interlocutorId)
      return item
  });
  let interlocutor = props.users[interlocutorIndex];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>{props.location.pathname === "/Dialogs" ?
        <div>Выбирите диалог</div> :
        <MessageContainer
          path={props.location.pathname}
          interlocutor={interlocutor} />}
      </div>
    </div>
  );
};


export default Dialogs;
