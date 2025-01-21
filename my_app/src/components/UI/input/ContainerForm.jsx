import React, {useState} from 'react';
import classes from './MyInput.module.css';
import MyInput from "./MyInput";
import MyButton from "../button/MyButton";

const ContainerForm = () => {
    const [title, setTitle] = useState('');

    return (
        <div className={classes.containerForm}>
            <form className={classes.containerInputs} action="">
                <MyInput value={title} onChange={e => setTitle(e.target.value)} />
                <MyInput />
                <MyButton title={title}>Create post</MyButton>
            </form>
        </div>
    );
};

export default ContainerForm;