import React from "react";
import { connect } from "react-redux";
import { addPost, getPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postData,
    userId: state.auth.profile.userId,
    isOwner: state.auth.isOwner,
    avatar: state.auth.profile.photoURL,


  };
};


const MyPostsContainer = connect(mapStateToProps, { addPost, getPost })(MyPosts);
export default MyPostsContainer;
