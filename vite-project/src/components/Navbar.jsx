import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to='/logIn'>Log In</NavLink></li>
            <li><NavLink to='/signUp'>Sign Up</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar