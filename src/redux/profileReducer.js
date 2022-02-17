const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        { id: 1, text: 'Hi every one', likesCount: 15 },
        { id: 2, text: 'Go to the cinema!', likesCount: 24 },
        { id: 3, text: 'I like trains!!!', likesCount: 5789 },
    ],
    newPostText: 'по умолчанию',
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {
                        id: 5,
                        text: state.newPostText,
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
            
        default: return state;
    }

};

export default profileReducer;