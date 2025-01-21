import React, {useState} from 'react';
import classes from './MyInput.module.css'

const MyInput = ({value, onChange, ...props}) => {
    return (
        <input
            {...props}
            value={value}
            onChange={onChange}

            type="text"
            placeholder='Post name'
            className={classes.myInput}
        />
    );
};

export default MyInput;