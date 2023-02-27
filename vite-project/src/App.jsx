import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route }  from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import UserUpdate from './pages/UserUpdate'
import HomePage  from './pages/HomePage'


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/logIn" element={<UserLogin />} />
        <Route path="/upDate" element={<UserUpdate />} />


        <Route path="*" element={<h1>Not Found...</h1>} />
      </Routes> 
    </div>
  )
}

export default App
