import React from "react";
import styles from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPostHere = () => {
        props.addPost();        
    };

    let changeText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    } 


    return (
        <div className={styles.posts}>

            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={changeText} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPostHere}>Add post</button>
            </div>

            {props.postsData.map(post => <Post message={post.text} likes={post.likesCount}/>)}
            
        </div>
    )
};

export default MyPosts;