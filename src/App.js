//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const texts = [
  "Hello, World!",
  "CircleCI is awesome!",
  "React makes UI easy!",
  "Testing is important!",
  "Build and deploy continuously!"
];

function App() {
  const [text, setText] = useState("Click the button to see a message!");

  const handleClick = () => {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setText(randomText);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>Show Message</button>
    </div>
  );
}

export default App;
