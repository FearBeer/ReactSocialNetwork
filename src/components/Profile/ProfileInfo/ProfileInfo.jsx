import React from "react";
import styles from "./ProfileInfo.module.scss"

const ProfileInfo = (props) => {
    return (
        <div className={styles.profile__header}>
           <img className={styles.profile__img} src="https://proprikol.ru/wp-content/uploads/2020/12/reki-krasivye-kartinki-35.jpg" alt="usersback" />
           <div>
               ava + description
           </div>
        </div>
    )
};

export default ProfileInfo;