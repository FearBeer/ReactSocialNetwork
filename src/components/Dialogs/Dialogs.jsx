import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessage = React.createRef();
    
    let addMessageHere = () => {        
        props.addMessage();            
    };

    let inputNewMessage = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogs__dialog}>
                {props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={styles.dialogs__messages}>
                {props.state.messagesData.map(message => <Message text={message.text}/>)}
            </div>

            <textarea ref={newMessage} value={props.state.newMessageText} onChange={inputNewMessage}></textarea>
            <button onClick={addMessageHere}>ADD MESSAGE</button>

        </div>

    )
};

export default Dialogs;