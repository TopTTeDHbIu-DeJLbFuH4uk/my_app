import React from "react";
import classes from './PostItems.module.css';
import MyButton from "./button/MyButton";

const PostItem = (props) => {

    return (
        <div className={classes.post}>
            <div className={classes.postContent}>
                <strong>{props.number}. {props.post.title}</strong>
                <h1>{props.post.body}</h1>
            </div>
            <div className={classes.postBtns}>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};
export default PostItem;