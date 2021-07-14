/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks";
import ProfileDataReduxForm from "./ProfileFormData";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


const ProfileInfo = (props) => {
  console.log(props);
  const classes = useStyles();
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
    props.updateProfile(data, userId)
    setEditMode(false);
  };
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div>
            <div>
              <img
                className={s.profile__photo}
                src={
                  props.profile.photoURL ||
                  userPhoto
                }
              />
            </div>
            {props.isOwner == props.userId ? (
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={uploadPhoto}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" style={{ color: green[500] }} component="span">
                    Upload
                  </Button>
                </label>
              </div>
            ) : null}
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
    <div>
      {props.isOwner == props.userId ? (
        <button onClick={goToEditMode}>edit</button>
      ) : null}
      <div>
        <b>Name: </b> {props.profile.name || props.profile.displayName}
      </div>
      <div>
        <b>About me: </b>
        {props.profile.aboutMe || "......"}
      </div>
      <div>
        <b> Status: </b>
        {props.profile.status
          ? props.profile.status
          : "........"}
      </div>
      <div>
        <b>lookingForAJob: </b>
        {props.profile.lookingForAJob ? "Да" : "Нет"}
      </div>

      <div>
        <b> lookingForAJobDescription: </b>
        {props.profile.lookingForAJobDescription
          ? props.profile.lookingForAJobDescription
          : "........"}
      </div>


    </div>
  );
};

export default ProfileInfo;
