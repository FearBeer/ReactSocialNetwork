import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {


    return (
        <div className={styles.friends}>
            <img className={styles.friends__avatar} src={props.avatar} alt="ava" />
            <div>{props.name}</div>
        </div>
    )
};

export default Sidebar;