import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.scss"

const Profile = () => {
    return (
        <div>
            <img className={styles.profile__img} src="https://proprikol.ru/wp-content/uploads/2020/12/reki-krasivye-kartinki-35.jpg" alt="usersback" />
            <MyPosts />
        </div>
    )
};

export default Profile;