import React from "react"
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
          Logo
        </div>
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
    </nav>
  )
};

export default Navbar;
