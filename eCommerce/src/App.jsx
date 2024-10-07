import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import Cart from './Components/Cart'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Shop/>} path='/'/>
          <Route element={<Cart/>} path='/cart'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
