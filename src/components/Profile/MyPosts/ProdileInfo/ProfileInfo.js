/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../../assets/images/user.png";
import ProfileDataReduxForm from "./ProfileFormData";
import MyPostsContainer from "../MyPostsContainer";
import editIcon from '../../../../assets/icon/icons_edit.svg'




const ProfileInfo = (props) => {
  console.log(props);

  let [editMode, setEditMode] = useState(false);
  let goToEditMode = () => {
    setEditMode(true);
  };
  const uploadPhoto = (e) => {
    let userId = props.userId;
    if (e.target.files.length) {
      props.savePhoto(props.profile, userId, e.target.files[0]);
    }
  };
  let onSubmit = (data) => {
    let userId = props.userId;
    props.updateProfile(props.profile, data, userId)
    setEditMode(false);
  };
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div>
            <div className={s.profile_photoContainer}>
              <img
                className={s.profile__photo}
                src={
                  props.profile.photoURL ||
                  userPhoto
                }
              />
              {props.isOwner == props.userId ? (
                <div className={s.profile_info_Upload}>
                  <input
                    accept="image/*"
                    className={s.inputUpload}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={uploadPhoto}
                  />
                  <label htmlFor="contained-button-file">
                    <div className={s.editAvatar}>Изменить аватар</div>
                  </label>
                </div>
              ) : null}
            </div>


          </div>
          {editMode ? <ProfileDataReduxForm profile={props.profile}
            initialValues={props.profile} onSubmit={onSubmit} /> :
            <ProfileData goToEditMode={goToEditMode} props={props} />}
        </div>
      </div>
    );
  }
};

const ProfileData = ({ props, goToEditMode }) => {
  return (
    <div className={s.profile_info}>

      <div className={s.profile_info_container}>
        <div className={s.item}>
          <div className={s.item_title}>Обо мне: </div>
          <div className={s.item_text}>{props.profile.aboutMe || "Напиши что-нибудь)"}</div>
        </div>
        <div className={s.item}>
          <div className={s.item_title}> Статус: </div>
          <div className={s.item_text}>{props.profile.status
            ? props.profile.status
            : "Напиши что-нибудь)"}
          </div>
        </div>
        <div className={s.item}>
          <div className={s.item_title}>Работа: </div>
          <div className={s.item_text}>{props.profile.lookingForAJob ? "Ищу" : "Не ищу"}</div>
        </div>

        {props.profile.lookingForAJob ? <div className={s.item}>
          <div className={s.item_title}> Описание желаемой работы: </div>
          <div className={s.item_text}>{props.profile.lookingForAJobDescription
            ? props.profile.lookingForAJobDescription
            : "Напиши что-нибудь)"}</div>
        </div> : null}
        <MyPostsContainer />
      </div>
      {props.isOwner == props.userId ? (
        <div >  <button className={s.profileInfo_editBtn} onClick={goToEditMode}><div className={s.profileinfo_icon}> </div>Редактировать</button></div>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
