import React, { useLayoutEffect } from "react";
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
  onSubmit = (data) => { this.props.sendMessage(data.newMessage, this.props.interlocutor.userId, this.props.isOwner, this.props.ownerName); };
  componentDidMount() {
    console.log("СopmponentDidMount MessageContainer");
    this.props.loadMessages(this.props.interlocutor.userId, this.props.isOwner, 10)
  }
  componentDidUpdate(prevState) {
    if (prevState.path != this.props.path) {
      this.props.loadMessages(this.props.interlocutor.userId, this.props.isOwner, 10)
    }
  }

  render() {
    console.log("render");
    return <div><Messages
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


const Messages = (props) => {
  const [countMessage, setCount] = useState(10);
  const [loading, setSLoading] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ block: "center" })
  }, [])

  useEffect(() => {
    if (loading) {
      props.loadMessages(props.interlocutor.userId, props.isOwner, countMessage)
      setSLoading(false)
    }
  }, [loading])

  useEffect(() => {

    setCount(10)
  }, [props.interlocutor.userId])

  let updateSetScroll = (e) => {
    if (e.target.scrollTop == 0) {
      setCount(countMessage + 10)
      setSLoading(true)
    } else {
      setSLoading(false)
    }
  }




  let messageElem = [];
  if (props.message[props.interlocutor.userId] && props.message[props.interlocutor.userId].length > 0) {
    [...props.message[props.interlocutor.userId]].reverse().map((item) => {
      let elem = <div className={item.userId === props.isOwner ? s.message_rigth : s.message_left}>
        <div className={s.message__item}><img src={item.userId == props.isOwner ? props.ownerPhoto : props.interlocutor.photoURL} alt="icon" className={s.message__avatar} />
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
      <h2>Вы еще не общались с {props.interlocutor.displayName}</h2>
      <p>Для начала поздаровайтесь с {props.interlocutor.displayName}</p>
    </div>)
  }
  const Mes = (props) => {
    return (
      <>
        {props.messageElem}

      </>
    )
  }
  return (

    <div onScroll={(e) => {
      updateSetScroll(e)
    }} className={s.dialog}>
      {loading ? <img src={Preloader} alt="preloader" className={s.preloader} /> : <div className={s.preloader_null} />}
      <Mes messageElem={messageElem} />
      <div ref={divRef} />
    </div>

  );
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
