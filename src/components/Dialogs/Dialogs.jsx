import React from "react";
import styles from "./Dialogs.module.scss"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            
            <div className={styles.dialogs__dialog}>
                <div className={styles.dialogs__user}>Rus</div>
                <div className={styles.dialogs__user}>Lina</div>
                <div className={styles.dialogs__user}>Vova</div>
                <div className={styles.dialogs__user}>Someone</div>
            </div>
            <div className={styles.dialogs__messages}>
                <div className={styles.dialogs__message}>Hi</div>
                <div className={styles.dialogs__message}>Hello</div>
                <div className={styles.dialogs__message}>How are you</div>
                <div className={styles.dialogs__message}>Ok</div>
                <div className={styles.dialogs__message}>OK!</div>
            </div>

        </div>

    )
};

export default Dialogs;