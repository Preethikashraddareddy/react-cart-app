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

  const cartCount = cartItems.length > 9 ? '9+' : cartItems.length

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 border-b'>
      <div className='container mx-auto flex items-center justify-between'>

        {/* Logo */}
        <Link to='/' className='text-lg font-bold'>TrendEase</Link>

        {/* Desktop Nav Links */}
        <div className='hidden lg:flex space-x-8'>
          <Link to='/' className='hover:font-bold'>Home</Link>
          <Link to='/about' className='hover:font-bold'>About</Link>
          <Link to='/all-products' className='hover:font-bold'>All Products</Link>
          <Link to='/men' className='hover:font-bold'>Men</Link>
          <Link to='/women' className='hover:font-bold'>Women</Link>
          <Link to='/kids' className='hover:font-bold'>Kids</Link>
        </div>

        {/* Icons + Hamburger */}
        <div className='flex items-center space-x-6'>
          <Link to='/cart' className='relative flex flex-col items-center'>
            <PiShoppingCart className='size-5' />
            <span className='text-sm'>Cart</span>
            {cartItems.length > 0 && (
              <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {cartCount}
              </span>
            )}
          </Link>

          <Link to='/wishlist' className='flex flex-col items-center'>
            <IoHeartOutline className='size-5' />
            <span className='text-sm'>Wishlist</span>
          </Link>

          <Link to='/profile' className='flex flex-col items-center'>
            <LiaUser className='size-5' />
            <span className='text-sm'>Profile</span>
          </Link>

          {/* Hamburger for Mobile */}
          <button className='lg:hidden' onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className='lg:hidden px-4 pt-4 pb-2 space-y-2 bg-white'>
          <Link to='/' className='block hover:font-bold'>Home</Link>
          <Link to='/about' className='block hover:font-bold'>About</Link>
          <Link to='/all-products' className='block hover:font-bold'>All Products</Link>
          <Link to='/men' className='block hover:font-bold'>Men</Link>
          <Link to='/women' className='block hover:font-bold'>Women</Link>
          <Link to='/kids' className='block hover:font-bold'>Kids</Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
