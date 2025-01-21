import React from "react";
import classes from '../styles/PostItems.module.css';

const PostItem = (props) => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <h1>{props.post.body}</h1>
            </div>
            <div className={classes.postBtns}>
                <button>Delete</button>
            </div>
        </div>
    );
};
export default PostItem;