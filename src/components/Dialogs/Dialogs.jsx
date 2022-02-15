import React from "react";
import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/state';

const Dialogs = (props) => {

    // let newMessage = React.createRef();
    
    let addMessageHere = () => {        
        props.dispatch(addMessageCreator());            
    };

    let inputNewMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreator(text)); 
    };

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogs__dialog}>
                {props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={styles.dialogs__messages}>
                {props.state.messagesData.map(message => <Message text={message.text}/>)}
            </div>

            <textarea value={props.state.newMessageText} onChange={inputNewMessage}></textarea>
            <button onClick={addMessageHere}>ADD MESSAGE</button>

        </div>

    )
};

export default Dialogs;