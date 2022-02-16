import React from "react";
import styles from "./MyPosts.module.scss"
import Post from "./Post/Post";



const MyPosts = (props) => {

    let addPostHere = () => {
        props.addPost();        
    };

    let changeText = (event) => {
        let text = event.target.value;
        props.updateNewPost(text);
        
    } 


    return (
        <div className={styles.posts}>

            <h3>My posts</h3>
            <div>
                <textarea onChange={changeText} value={props.profilePage.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPostHere}>Add post</button>
            </div>

            {props.profilePage.postsData.map(post => <Post message={post.text} likes={post.likesCount}/>)}
            
        </div>
    )
};

export default MyPosts;