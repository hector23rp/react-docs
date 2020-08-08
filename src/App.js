import React from 'react';
import logo from './logo.svg';
import './App.css';

class Isa extends React.Component {
  render() {
    return <h1>Qué kukiiii {this.props.name}!!</h1>
  }
}
class Phrases extends React.Component {
  render() {
    return <Isa name="Héctor"></Isa>
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Phrases />
        <Clock date={new Date()}></Clock>
      </header>
    </div>
  );
}

export default App;
