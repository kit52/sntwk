import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "../../../common/FormControl/FormControl.module.css";
import { Input } from "../../../common/FormControl/FormControl";
import { connect } from "react-redux";
import s from "./ProfileInfo.module.css";
const ProfileFormData = (props) => {
  console.log(props);
  return (


    <form className={s.profile_info} onSubmit={props.handleSubmit}>

      <div className={s.profile_info_container}>
        <div className={s.item}>
          <div className={s.item_title}> Обо мне: </div><Field component={Input} type="textarea" name="aboutMe" />
        </div>
        <div className={s.item}>
          <div className={s.item_title}> Статус: </div><Field component={Input} name="status" />
        </div>
        <div className={s.item + " " + s.itemJob}>
          <div className={s.item_title}> Ищу работу: </div>
          <Field component={Input} type="checkbox" name="lookingForAJob" />
        </div>
        <div className={s.item}>
          <div className={s.item_title}> Описание желаемой работы: </div><Field component={Input} type="textarea" name="lookingForAJobDescription" />
        </div>

      </div>
      <div><button className={s.profileInfo_editBtn}>Сохранить</button></div>

    </form>

  );
};
export const ProfileDataReduxForm = reduxForm({ form: "ProfileFormData" })(
  ProfileFormData
);

export default ProfileDataReduxForm;
