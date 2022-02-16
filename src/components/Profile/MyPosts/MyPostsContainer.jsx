import React from "react";
import MyPosts from "./MyPosts";
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profileReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        changeText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;