import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let addMessageHere = () => {        
        props.addMessage();            
    };

    let inputNewMessageHere = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text); 
    };


    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogs__dialog}>
                {props.messagesPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={styles.dialogs__messages}>
                {props.messagesPage.messagesData.map(message => <Message text={message.text}/>)}
            </div>

            <textarea value={props.messagesPage.newMessageText} onChange={inputNewMessageHere}></textarea>
            <button onClick={addMessageHere}>ADD MESSAGE</button>

        </div>
    )
};

export default Dialogs;