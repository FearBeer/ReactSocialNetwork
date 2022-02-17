import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        inputNewMessage: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) 
    
export default DialogsContainer;