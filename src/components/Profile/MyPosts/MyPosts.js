import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl, Textarea } from "../../common/FormControl/FormControl.js";
import { required, maxLengthCreator } from "../../utils/validation/FormValid.js"
import s from "./MyPosts.module.css";
import Button from "../../btn/Button";

import Posts from "./Posts/Posts";
const MyPosts = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  let [count, setIsCount] = useState(12);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  })
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsFetching(true)
      setIsCount(count = count + 12)
    }
  }
  useEffect(() => {
    if (isFetching) {
      props.getPost(props.userId, count)
      setIsFetching(false)
    }
  }, [isFetching])




  let onSubmit = (data) => {
    let newPostText = data.newPostText;
    props.addPost(props.userId, newPostText);
  };
  let postElements = props.posts.map((p) => <Posts time={p.time} avatar={props.avatar} message={p.message} />);
  return (
    <div className={s.myposts}>
      <div className={s.myposts_title}>Мои посты</div>
      {props.isOwner == props.userId ? <AddNewPostRedux onSubmit={onSubmit} /> : null}
      {postElements}
    </div>
  );
};
let maxLength50 = maxLengthCreator(50);
const AddPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        placeholder="Введите ваш пост здесь"
        name="newPostText"
        validate={[required, maxLength50]}
      />
      <div className={s.mypost_btnContainer}>
        <Button text="Добавить пост" class="mypost_button" />
      </div>
    </form>
  );
};
const AddNewPostRedux = reduxForm({ form: "addPostForm" })(AddPostForm);
export default MyPosts;
