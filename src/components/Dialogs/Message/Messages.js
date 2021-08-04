import React from "react";
import s from "./Message.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validation/FormValid";
import { Textarea } from "../../common/FormControl/FormControl";
import { connect } from "react-redux";
import {
  sendMessage,
  loadMessages,
  setIsFetchingStatus
} from "../../../redux/dialogs-reducer";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "../../btn/Button"
import { useState } from "react";
import Preloader from '../../../assets/icon/Loader.svg'

class MessageContainer extends React.Component {
  onSubmit = (data) => {
    this.props.sendMessage(data.newMessage, this.props.interlocutor.userId, this.props.isOwner, this.props.ownerName);
  };
  componentDidMount() {
    this.props.loadMessages(this.props.interlocutor.userId, this.props.isOwner, 20)
  }
  componentDidUpdate(prevState) {
    if (prevState.path != this.props.path) {
      this.props.loadMessages(this.props.interlocutor.userId, this.props.isOwner, 20)
    }
  }

  render() {
    return <div><MessagesItems
      sendMessage={this.props.sendMessage}
      isOwner={this.props.isOwner}
      ownerName={this.props.ownerName}
      ownerPhoto={this.props.ownerPhoto}
      loadMessages={this.props.loadMessages}
      interlocutor={this.props.interlocutor}
      message={this.props.message}
    />
      <AddNewMessageFormRedux onSubmit={this.onSubmit} />
    </div>
  }
}
let mapStateToProps = (state) => {
  return {
    isOwner: state.auth.isOwner,
    ownerName: state.auth.ownerName,
    ownerPhoto: state.auth.photoOwner,
    message: state.dialogsPage.messageData,
  };
};

class MessagesItems extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  scrollHandler() {
    this.myRef.current.scrollIntoView({ block: "end", inline: "nearest" })
  }
  componentDidMount() {
    this.scrollHandler()
  }
  componentDidUpdate() {
    this.scrollHandler()
  }

  render() {
    let messageElem = [];
    if (this.props.message[this.props.interlocutor.userId] && this.props.message[this.props.interlocutor.userId].length > 0) {
      [...this.props.message[this.props.interlocutor.userId]].map((item) => {
        let elem = <div className={item.userId === this.props.isOwner ? s.message_rigth : s.message_left}>
          <div className={s.message__item} key={item.data + item.userId}><img src={item.userId == this.props.isOwner ? this.props.ownerPhoto : this.props.interlocutor.photoURL} alt="icon" className={s.message__avatar} />
            <p className={s.messageName}>{item.name}</p>
          </div>
          <div className={s.message__text}>
            {item.message}
          </div>
        </div>
        messageElem.push(elem)
      })
    } else {
      messageElem.push(<div>
        <h2>Вы еще не общались с {this.props.interlocutor.displayName}</h2>
        <p>Для начала поздаровайтесь с {this.props.interlocutor.displayName}</p>
      </div>)
    }
    return <div className={s.dialog}>
      <Messages messageElem={messageElem} />
      <div ref={this.myRef} >x</div>
    </div>
  }
}


const Messages = (props) => {
  return (<>{props.messageElem}</>);
};



const maxLength50 = maxLengthCreator(50);
const AddNewMessageForm = (props) => {
  return (
    <div className={s.message__form}>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          contenteditable="true"
          placeholder="Enter your message here"
          name="newMessage"
          validate={[required, maxLength50]}
        />
        <div className={s.message_btn}>
          <Button text="Отправить сообщение" />
        </div>
      </form>
    </div>
  );
};
const AddNewMessageFormRedux = reduxForm({ form: "newMessage" })(
  AddNewMessageForm
);

export default connect(mapStateToProps, { sendMessage, loadMessages, setIsFetchingStatus })(MessageContainer);


