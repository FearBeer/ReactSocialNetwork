import React from "react";
import styles from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={styles.dialogs__message}>{props.text}</div>
    )
}

export default Message;