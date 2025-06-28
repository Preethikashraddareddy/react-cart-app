import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xl font-bold">TrendEase</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:font-bold">Home</Link>
          <Link to="/about" className="hover:font-bold">About</Link>
          <Link to="/contact" className="hover:font-bold">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
