import React from 'react';
import './App.css';
import Person from './Person';

function App() {
  let person = new Person('Mai');
  let msg1 = person.isMyself('An');
  let msg2 = person.isMyself('Mai');
  return (
    <div className="App">
      <div>An: {msg1}</div>
      <div>Mai: {msg2}</div>
    </div>
  );
}


export default App;
