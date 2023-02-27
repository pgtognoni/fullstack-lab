import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function User(props) {

    //const { error } = props

    const [ userName, setUserName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    
    const [ error, setError ] = useState('')
    console.log(error)

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { userName, email, password }

        try {
            const newUser = await fetch('http://localhost:5005/user/signUp', {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })

            const parsedUser = await newUser.json()

            if (parsedUser.status === 200) {
                navigate('/logIn')
            } else {
                if (parsedUser.code === 11000) { 
                    throw new Error("User already exists")
                }
                throw new Error(parsedUser.message)
            }

        } catch (error) {
            console.error(error)
            setError(error.message)
        }   
    }

  return (
    <>
    <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor='username'>Username
            <input type='text' id='username' name='username' 
                onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label htmlFor='email'>Email
            <input type='email' id='username' name='username' 
                onChange={(e) => setEmail(e.target.value)}  
            />
        </label>
        <label htmlFor='password'>Password
            <input type='password' id='username' name='username' 
                onChange={(e) => setPassword(e.target.value)}  
            />
        </label>
        <button type='submit'>Submit</button>
    </form>
    {error && <h4 style={{color: 'red'}}>{error}</h4>}
    </>
)
}

export default User