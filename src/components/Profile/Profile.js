import React from "react";
import ProfileInfo from "./MyPosts/ProdileInfo/ProfileInfo";
import s from "./Profile.module.css"
const Profile = (props) => {
  return (
    <div>
      <div className={s.profile_name}>{props.displayName}</div>
      <ProfileInfo
        updateProfile={props.updateProfile}
        profile={props.profile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        userId={props.userId}
        updateProfileStatus={props.updateProfileStatus}
        saveProfile={props.saveProfile}
      />
    </div>
  );
};
export default Profile;
