// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    handleKeyUp = (e) => console.log('Entering password...')
    
        
    

    render() {
        return (
            <div>
                <input
                type= "password"
                onKeyUp={this.handleKeyUp}

                />
                
            </div>
        );
    }
}

export default Keypad;
