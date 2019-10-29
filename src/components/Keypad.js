import React, { Component } from 'react';

class Keypad extends Component {
    message = () => {
        console.log('Entering password...');
    }

    render() {
        return (
            <input type='password' onKeyUp={this.message} />
        )
    }
}

export default Keypad;