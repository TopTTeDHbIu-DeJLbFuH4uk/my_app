import React from "react";

class СlassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    };

    increment = () => {
        this.setState({count: this.state.count + 1});
    };
    decrement = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <main className='main-container'>
                <div className="container">
                    <h1 className='number'>{this.state.count}</h1>
                    <div className="container-buttons">
                        <button className='btn' onClick={this.increment}>Increment</button>
                        <button className='btn' onClick={this.decrement}>Decrement</button>
                    </div>
                </div>
            </main>
        );
    };
}

// export default СlassCounter;