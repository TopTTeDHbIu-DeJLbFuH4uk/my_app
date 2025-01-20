import React, {useState} from 'react';
import '../styles/counters.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="container">
            <h1 className='number'>{count}</h1>
            <div className="container-buttons">
                <button className='btn' onClick={increment}>Increment</button>
                <button className='btn' onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;