import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { PiShoppingCart } from "react-icons/pi"
import { IoHeartOutline } from "react-icons/io5"
import { LiaUser } from "react-icons/lia"
import { HiMenu, HiX } from 'react-icons/hi'

const NavBar = () => {
  const { cartItems } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const cartCount = cartItems.length > 9 ? '9+' : cartItems.length

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>

        {/* Logo */}
        <Link to='/' className='text-xl font-bold'>TrendEase</Link>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex space-x-8'>
          <Link to='/' className='hover:font-bold'>Home</Link>
          <Link to='/about' className='hover:font-bold'>About</Link>
          <Link to='/all-products' className='hover:font-bold'>All Products</Link>
          <Link to='/men' className='hover:font-bold'>Men</Link>
          <Link to='/women' className='hover:font-bold'>Women</Link>
          <Link to='/kids' className='hover:font-bold'>Kids</Link>
        </div>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center space-x-6'>

          {/* Cart */}
          <div className='relative flex flex-col items-center'>
            <Link to='/cart'>
              <PiShoppingCart className='size-5' />
              <span className='text-sm'>Cart</span>
              {cartItems.length > 0 && (
                <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Wishlist */}
          <Link to='/wishlist' className='flex flex-col items-center'>
            <IoHeartOutline className='size-5' />
            <span className='text-sm'>Wishlist</span>
          </Link>

          {/* Profile */}
          <Link to='/profile' className='flex flex-col items-center'>
            <LiaUser className='size-5' />
            <span className='text-sm'>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden px-6 pb-4 pt-2 space-y-2 bg-white shadow-md rounded'>
          <Link to='/' className='block w-full py-2' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/about' className='block w-full py-2' onClick={() => setIsOpen(false)}>About</Link>
          <Link to='/all-products' className='block w-full py-2' onClick={() => setIsOpen(false)}>All Products</Link>
          <Link to='/men' className='block w-full py-2' onClick={() => setIsOpen(false)}>Men</Link>
          <Link to='/women' className='block w-full py-2' onClick={() => setIsOpen(false)}>Women</Link>
          <Link to='/kids' className='block w-full py-2' onClick={() => setIsOpen(false)}>Kids</Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
