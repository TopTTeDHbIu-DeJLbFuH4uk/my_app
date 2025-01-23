import React, {useState} from 'react';
import classes from "./input/MyInput.module.css";
import MyButton from "./button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = e => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(),
        }

        create(newPost);
        setPost({title: '', body: ''});
    }



    return (
        <form className={classes.containerForm} onSubmit={addNewPost}>
            <div className={classes.containerInputs}>
                <input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}

                    className={classes.myInput}
                    type="text"
                    placeholder='Post name'/>
                <input
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}

                    className={classes.myInput}
                    type="text"
                    placeholder='Post description'/>
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </div>
        </form>
    );
};

export default PostForm;