import React, { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import NavBar from './pages/NavBar'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import About from './pages/About'
import Wishlist from './pages/Wishlist'
import AllProducts from './pages/AllProducts'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
           <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/men' element = {<Men/>}/>
        <Route path='/women' element = {<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
