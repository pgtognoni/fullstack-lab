import React from 'react'
import User from '../components/User'

function UserSignUp({ error }) {

    console.log(error)

  return (
    <div>
        <h1>User Sign Up</h1>
        <User error={error} />
    </div>
  )
}

export default UserSignUp