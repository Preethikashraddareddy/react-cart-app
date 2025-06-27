import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { PiShoppingCart } from "react-icons/pi";
import { IoHeartOutline } from "react-icons/io5";
import { LiaUser } from "react-icons/lia";


const NavBar = () => {
const {cartItems} = useContext(CartContext)
let count = cartItems.length
  return (

      <nav  className='p-4 border-b-1 ' >
        <div className='container mx-auto flex items-center justify-between'> 
        <div className='flex space-x-8' >
        <Link to = '/' className=' hover:font-bold '>Home</Link>
        <Link to='/about' className='hover:font-bold'>About</Link>
        <Link to='/men' className=' hover:font-bold'>Men</Link>
        <Link to='/women' className=' hover:font-bold'>Women</Link>
        <Link to='/kids' className=' hover:font-bold'>Kids</Link>
        </div>
        <div className='flex items-center space-x-6'>
        <Link to ='/cart' className='flex flex-col items-center'>
        <PiShoppingCart className='size-5'/>
        <span className='text-sm'>Cart</span> <span className='text-sm'> {count===0?'':count}</span></Link>
        <Link to ='/cart' className='flex flex-col items-center'><IoHeartOutline className='size-5'/><span className='text-sm'>Wishlist</span></Link>
        <Link to ='/cart' className='flex flex-col items-center'><LiaUser className='size-5' /><span className='text-sm'>Profile</span></Link>
        </div>
        </div>
      </nav>
  )
}

export default NavBar
