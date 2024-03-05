import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentC from './components/ParentC';
import Form from './components/Form';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Form />
        {
        /*<ParentC />
        <Message />
        <Counter />
        <Greet  name="User" language="coding">
        <h5>This is a bold step forward.</h5>
        </Greet>
        <Greet  name="Zymo" language="React">
        <h5>You are a legend.</h5>
        </Greet>
        <Welcome position="First" language="Javascript"/>
        <Welcome position="Then" language="Typescript"/>
        <Welcome position="Now" language="React"/> */
        }
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React! Zymo is here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
