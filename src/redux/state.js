const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let store = {
    _state: {

        profilePage: {
            postsData: [
                { id: 1, text: 'Hi every one', likesCount: 15 },
                { id: 2, text: 'Go to the cinema!', likesCount: 24 },
                { id: 3, text: 'I like trains!!!', likesCount: 5789 },
            ],
            newPostText: 'по умолчанию',
        },

        messagesPage: {
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
        },

        sidebar: {
            friendList: [
                { id: 1, name: 'Rus', avatarSrc: 'https://i1.wp.com/get.wallhere.com/photo/face-black-cat-nose-kittens-whiskers-Fang-Black-Cat-eye-cats-kitten-darkness-mammal-computer-wallpaper-black-and-white-vertebrate-organ-close-up-cat-like-mammal-macro-photography-snout-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-puss-1600x1116-px-lovely-desktop-images-cat-images-cat-photos-cat-wallpapers-cutties-feline-pictures-on-the-wall-pussycats-802969.jpg' },
                { id: 2, name: 'Lina', avatarSrc: 'https://i1.wp.com/get.wallhere.com/photo/face-black-cat-nose-kittens-whiskers-Fang-Black-Cat-eye-cats-kitten-darkness-mammal-computer-wallpaper-black-and-white-vertebrate-organ-close-up-cat-like-mammal-macro-photography-snout-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-puss-1600x1116-px-lovely-desktop-images-cat-images-cat-photos-cat-wallpapers-cutties-feline-pictures-on-the-wall-pussycats-802969.jpg' },
                { id: 3, name: 'Vova', avatarSrc: 'https://i1.wp.com/get.wallhere.com/photo/face-black-cat-nose-kittens-whiskers-Fang-Black-Cat-eye-cats-kitten-darkness-mammal-computer-wallpaper-black-and-white-vertebrate-organ-close-up-cat-like-mammal-macro-photography-snout-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-puss-1600x1116-px-lovely-desktop-images-cat-images-cat-photos-cat-wallpapers-cutties-feline-pictures-on-the-wall-pussycats-802969.jpg' },
                { id: 4, name: 'Someone', avatarSrc: 'https://i1.wp.com/get.wallhere.com/photo/face-black-cat-nose-kittens-whiskers-Fang-Black-Cat-eye-cats-kitten-darkness-mammal-computer-wallpaper-black-and-white-vertebrate-organ-close-up-cat-like-mammal-macro-photography-snout-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-puss-1600x1116-px-lovely-desktop-images-cat-images-cat-photos-cat-wallpapers-cutties-feline-pictures-on-the-wall-pussycats-802969.jpg' },
            ],
        },
    },

    _callSubscriber() { },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        }

        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                text: this._state.messagesPage.newMessageText,
            }

            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this.getState());
        }

        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this.getState());
        }

        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
    }

}

export const addPostCreator = () => ({type: ADD_POST});
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;