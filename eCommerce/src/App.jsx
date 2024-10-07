import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          {/* <Route element={<Navbar/>} path='/'/> */}
          {/* <Route element={} path='/cart'> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
