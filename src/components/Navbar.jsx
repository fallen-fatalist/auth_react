import React, { useContext } from "react"
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/contextIndex";
import MyButton from "./UI/button/MyButton/MyButton";

const Navbar = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    navigate("/")
  }
  const navigate = useNavigate()
  return (
    <nav className="navbar">
        <div className="navbar__logo">
          Logo
        </div>
        {isAuth ?
        <MyButton onClick={() => setIsAuth(false)}>
          Logout
        </MyButton>
        : 
        <MyButton onClick={() => navigate("/login")}>
          Login
        </MyButton>

        } 
        <div className="navbar__links">

          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
    </nav>
  )
};

export default Navbar;
