import React from "react";
import '../styles/post_items.css';

const PostItem = (props) => {

    return (
        <div className='post'>
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <h1>{props.post.body}</h1>
            </div>
            <div className="post_btns">
                <button>Delete</button>
            </div>
        </div>
    );
};
export default PostItem;