import React from 'react';
import { css } from 'ui-utils';
import './App.css';
import logo from './logo.svg';
const cn = css(require('./App.module.css'));

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
        <button className={cn('scb-btn','scb-btn-blue')}>
          Button         
        </button>

        <button className={cn.buttonTwo}>
          Button
        </button>
      </header>
    </div>
  );
}

export default App;
