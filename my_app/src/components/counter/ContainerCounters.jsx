import React from 'react';
import Counter from "./Counter";
import classes from './Сounter.module.css';

const ContainerCounters = () => {
    return (
        <div className={classes.mainContainer}>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
};

export default ContainerCounters;