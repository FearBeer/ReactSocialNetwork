import React from "react";
import styles from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/state';


const MyPosts = (props) => {

    let addPostHere = () => {
        props.dispatch(addPostCreator());        
    };

    let changeText = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextCreator(text));
        
    } 


    return (
        <div className={styles.posts}>

            <h3>My posts</h3>
            <div>
                <textarea onChange={changeText} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPostHere}>Add post</button>
            </div>

            {props.postsData.map(post => <Post message={post.text} likes={post.likesCount}/>)}
            
        </div>
    )
};

export default MyPosts;