import React from 'react';
import { Greetings } from './Greetings';
import { Counter } from './Counter';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <div>I am App Component!</div>

      <Greetings name='Alice' color='blue'/>

      <Greetings name='Bob' color='green'/>

      <hr/>

      <Counter/>
    </div>
  );
}

