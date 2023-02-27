import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <h1>Welcome</h1>
        <Link to="/signUp">Sing Up</Link>
        <Link to="/logIn">Log In</Link>
    </div>

  )
}



export default HomePage