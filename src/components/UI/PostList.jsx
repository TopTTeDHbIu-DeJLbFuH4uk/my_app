import React from 'react';
import PostItem from "./PostItem";
import classes from './PostItems.module.css';

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 className={classes.postTitle}>
                Posts not found!
            </h1>
        );
    }

    return (
        <div>
            <h1 className={classes.postTitle}>{title}</h1>
            {posts.map((post, index) => <PostItem remove={remove}
                                                  number={index + 1}
                                                  post={post} key={post.id}
            />)}
        </div>
    );
};

export default PostList;