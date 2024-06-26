import React from 'react'
import "./Navbar.css"
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
           <NavLink to="/"><li>Home</li></NavLink>
           <NavLink to="/about"><li>About</li></NavLink>
           <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar