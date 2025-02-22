import React, {useState, useEffect} from 'react';
import { 
  BrowserRouter, 
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/contextIndex';

// Styles
import './styles/App.css';



function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
        // const response = await fetch("https://your-api.com/auth/status", {
        //     credentials: "include"
        // });

        // if (response.ok) {
        //     setIsAuth(true);
        // }
    };

    checkAuth();
  }, [])

  return (
      <AuthContext.Provider value= {{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter> 
          <div className="App">
            <Navbar/>
            <AppRouter/>
          </div>
        </BrowserRouter> 
      </AuthContext.Provider>
  );
}

export default App;
