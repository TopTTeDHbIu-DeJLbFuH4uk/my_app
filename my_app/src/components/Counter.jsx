import React, {useState} from 'react';
import classes from '../styles/Сounter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.number}>{count}</h1>
            <div className={classes.containerButtons}>
                <button className={classes.btn} onClick={increment}>Increment</button>
                <button className={classes.btn} onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;