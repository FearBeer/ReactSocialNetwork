import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    

    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
};

export default Profile;