import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    

    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} 
                    newPostText={props.state.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>
        </div>
    )
};

export default Profile;