import React from "react";
import styles from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <Post message="Hi every one" likes="15"/>
            <Post message="Go to the cinema!" likes="29"/>
            {/* <Post/>
            <Post/> */}
        </div>
    )
};

export default MyPosts;