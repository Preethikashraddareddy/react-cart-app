import React, { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import NavBar from './pages/NavBar'

const App = () => {
  return (
    <div>
           <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
