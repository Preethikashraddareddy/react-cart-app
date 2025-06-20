import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const NavBar = () => {
const {cartItems} = useContext(CartContext)
let count = cartItems.length
  return (
    <>
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <Link to = '/'>Home</Link>
        <Link to ='/cart'>Cart<span className=''>{count===0?'':count}</span></Link>
      </nav>
    </>
  )
}

export default NavBar
