const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

let initialState = {
    dialogsData: [
        { id: 1, name: 'Rus' },
        { id: 2, name: 'Lina' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Someone' },
    ],
    messagesData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'Hello' },
        { id: 3, text: 'How are you' },
        { id: 4, text: 'Ok' },
        { id: 5, text: 'OK!' },
    ],
    newMessageText: 'wtf!?'
};

const dialogsReducer = (state = initialState, action) => {
       
    switch (action.type) {
        case ADD_MESSAGE : 
        return {
                ...state,
                newMessageText: '',
                messagesData: [
                    ...state.messagesData, {
                    id: 6,
                    text: state.newMessageText,
                }],
            };
            

        case UPDATE_NEW_MESSAGE_TEXT: 
        return {
            ...state,
            newMessageText: action.newText,
        };
        
        default: return state;
    }
    
};

export default dialogsReducer;