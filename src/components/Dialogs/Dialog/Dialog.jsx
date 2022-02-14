import React from "react";
import styles from "./Dialog.module.scss";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialogs__user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};
export default Dialog;