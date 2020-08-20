import React from 'react';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };

        this.handleButton = this.handleClick.bind(this);
        
    }

    handleClick(event) {
        this.setState((state, _) => {
            return { isToggle: !state.isToggle };
        })
    } 

    render() {
        return (
            <button onClick={this.handleButton}>
                {this.state.isToggle ? 'ON' : 'OFF'} 
            </button>
        );
    }
}