import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };
        
    }

    handleClick(event) {
        this.setState((state, _) => {
            return { isToggle: !state.isToggle };
        })
    } 

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'ON' : 'OFF'} 
            </button>
        );
    }
}