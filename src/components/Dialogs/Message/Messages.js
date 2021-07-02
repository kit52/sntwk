import React from "react";
import s from "./Message.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validation/FormValid";
import { Textarea } from "../../common/FormControl/FormControl";
import { connect } from "react-redux";
import {
  sendMessage,
  getMessage
} from "../../../redux/dialogs-reducer";
import { useEffect } from "react";
import { useRef } from "react";


class MessageContainer extends React.Component {
  render() {
    return <Messages props={this.props}
      interlocutorPhoto={this.props.interlocutor.photoURL}
      message={this.props.message[this.props.interlocutor.userId]}
      interlocutorName={this.props.interlocutor.name ? this.props.interlocutor.name : this.props.interlocutor.displayName}
    />
  }
}
let mapStateToProps = (state) => {
  return {
    isOwner: state.auth.isOwner,
    users: state.userPage.users,
    ownerName: state.auth.displayName,
    ownerPhoto: state.auth.photoOwner,
    message: state.dialogsPage.messageData
  };
};
// interlocutorPhoto: state.userPage.users.findIndex((item)=>{item.userId === this.props.uid})


const Messages = ({ props }) => {
  console.log(props);
  const divRef = useRef(null);

  useEffect(() => {

    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  useEffect(() => {
    props.getMessage(props.interlocutor.userId, props.isOwner)
  })
  let onSubmit = (data) => {
    console.log(props);
    props.sendMessage(data.newMessage,
      props.interlocutor.userId,
      props.isOwner,
      props.ownerName,
      props.ownerPhoto
    );
  };
  let messageElem = [];
  if (props.message[props.interlocutor.userId]) {
    console.log(props.message[props.interlocutor.userId]);
    [...props.message[props.interlocutor.userId]].reverse().map((item) => {
      let elem = <div className={item.userId === props.isOwner ? s.message_rigth : s.message_left}>
        <div className={s.message__item}><img src={item.photoURL} alt="icon" className={s.message__avatar} /><p className={s.messageName}>{item.name}</p></div>
        <div className={s.message__text}>{item.message}</div>
      </div>
      messageElem.push(elem)
    })
  } else {
    messageElem.push(<div>
      <h2>Вы еще не общались с {props.interlocutor.displayName}</h2>
      <p>для начала поздаровайтесь с {props.interlocutor.displayName}</p>
    </div>)
  }

  return <div className={s.dialog}>
    {messageElem}
    <div ref={divRef} />
    <div><AddNewMessageFormRedux onSubmit={onSubmit} /></div>
  </div>;
};
const maxLength50 = maxLengthCreator(50);
const AddNewMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          placeholder="Enter your message here"
          name="newMessage"
          validate={[required, maxLength50]}
        />
        <div>
          <button>Send message</button>
        </div>
      </form>
    </div>
  );
};
const AddNewMessageFormRedux = reduxForm({ form: "newMessage" })(
  AddNewMessageForm
);

export default connect(mapStateToProps, { sendMessage, getMessage })(MessageContainer);
