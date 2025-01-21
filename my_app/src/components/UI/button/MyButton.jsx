import React, {useState} from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, title, ...props}) => {

    const addNewPost = e => {
        e.preventDefault();
        console.log(title) // Значение с инпут поля
    };

    return (
        <button onClick={addNewPost} {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;