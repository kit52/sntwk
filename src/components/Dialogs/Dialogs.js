import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageContainer from "./Message/Messages";
const Dialogs = ({ props }) => {
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
    <div >
      {props.location.pathname === "/Dialogs" ?
        <div className={s.dialogs_title}>
          {
            dialogsElements.length > 0 ?
              "Выбeрите диалог" :
              "У вас еще нету ни одного друга. Для того чтобы начать диалог, вам необходимо взаимно подписаться на необходимого  человека"
          }</div> : null}
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        {props.location.pathname !== "/Dialogs" ?
          <MessageContainer
            path={props.location.pathname}
            interlocutor={interlocutor} />

          : null
        }
      </div>
    </div>
  );
};


export default Dialogs;
