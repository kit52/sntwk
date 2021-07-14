import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProdileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo

        updateProfile={props.updateProfile}
        profile={props.profile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        userId={props.userId}
        updateProfileStatus={props.updateProfileStatus}
        saveProfile={props.saveProfile}

      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
