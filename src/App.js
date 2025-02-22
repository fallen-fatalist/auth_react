import React from 'react';
import { 
  BrowserRouter, 
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

// Styles
import './styles/App.css';



function App() {

  return (
    <div className="App">
    <BrowserRouter> 
        <Navbar/>
        <AppRouter/>
    </BrowserRouter> 
    </div>
  );
}

export default App;
