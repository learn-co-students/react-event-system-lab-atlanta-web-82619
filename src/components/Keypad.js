import React from 'react';

class Keypad extends React.Component {

    handleKeyUp = () => {
        console.log('Entering password...')
    }
    
    render(){
        return (
            <input onKeyUp={this.handleKeyUp} type='password' />
        )
    }
}// Code Keypad Component Here

export default Keypad;