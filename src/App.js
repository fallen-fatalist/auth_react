import React, { useState } from 'react';
import './App.css';

function App() { 
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState("Input text")

function increment() {
  setLikes(likes + 1)
}

function decrement() {
  setLikes(likes - 1)
}
  
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      
      <button onClick={increment}>Increment</button> 
      <button onClick={decrement}>Decrement</button>
      <input type="text" onChange={e => setValue(e.target.value)}/>
    </div>
  );
}

export default App;
