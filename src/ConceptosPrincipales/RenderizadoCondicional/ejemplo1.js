import React from "react";

function LoginOut(props) {
    return(
        <button onClick={props.onClick}>
            LoginOut
        </button>
    );
}

function LoginIn(props) {
    return(
        <button onClick={props.onClick}>
            LoginIn
        </button>
    );
}

export default class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };

        this.handleLoginInClick = this.handleLoginIn.bind(this);
        this.handleLoginoutClick = this.handleLoginout.bind(this);
    }

    handleLoginIn(e) {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLoginout(e) {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        let button = this.state.isLoggedIn ? 
            <LoginOut onClick={this.handleLoginoutClick}></LoginOut> :
            <LoginIn onClick={this.handleLoginInClick}></LoginIn>;
        return (
            <div>
                <h1>Login Control</h1>
                {button}
            </div>
        );
    }
}