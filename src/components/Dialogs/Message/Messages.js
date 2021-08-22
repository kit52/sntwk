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

let mapStateToProps = (state) => {
  return {
    isOwner: state.auth.isOwner,
    ownerName: state.auth.ownerName,
    ownerPhoto: state.auth.photoOwner,
    message: state.dialogsPage.messageData,
    Fetching: state.dialogsPage.Fetching
  };
};

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
    console.log(this.props);
    return <div>
      <div className={s.dialog}>
        <Messages
          message={this.props.message[this.props.interlocutor.userId]}
          interlocutor={this.props.interlocutor}
          isOwner={this.props.isOwner}
          ownerPhoto={this.props.ownerPhoto}
          isFetching={this.props.isFetching}
        />
      </div>
      <AddNewMessageFormRedux onSubmit={this.onSubmit} />
    </div>
  }
}


class Messages extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  scrollHandler() {
    this.myRef.current.scrollIntoView({ block: "end", inline: "nearest" })
    console.log("scroll");
  }

  componentDidMount() {
    // this.scrollHandler()
    console.log("didMount");
  }
  componentDidUpdate(prevState) {
    console.log(prevState.Fetching);
    console.log(this.props.Fetching);
    if (prevState.Fetching && !this.props.Fetching) {

      this.scrollHandler()
    }

  }
  render() {
    let messageElem = [];
    if (this.props.message && this.props.message.length > 0) {
      [...this.props.message].map((item) => {
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
      messageElem.push(<div key="welcome_message">
        <h2>Вы еще не общались с {this.props.interlocutor.displayName}</h2>
        <p>Для начала поздаровайтесь с {this.props.interlocutor.displayName}</p>
      </div>)
    }
    return (<>
      {messageElem}
      <div ref={this.myRef} >x</div>
    </>)
  };
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


