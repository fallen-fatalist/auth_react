import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import './App.css';

function App() { 
  const [value, setValue] = useState("Input text")

  
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
