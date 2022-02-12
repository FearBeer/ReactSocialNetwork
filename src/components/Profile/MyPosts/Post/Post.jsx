import React from "react";
import styles from "./Post.module.scss"

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.post__img} src="https://vraki.net/sites/default/files/inline/images/1_6.png" alt="avatar" />
            <div className={styles.post__message}> 
                <div className={styles.post__leftborder}></div>
                <div>{props.message}</div>
                <div className={styles.post__like}>Likes: <span>{props.likes}</span></div> 
            </div>            
        </div>
    )
};

export default Post;