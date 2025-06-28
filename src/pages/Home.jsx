import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CategoryCard from '../components/CategoryCard'
import Testimonials from '../components/Testimonials'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  const { cartItems } = useContext(CartContext)
  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/Categories.json')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(err => console.error('Error fetching categories:', err))
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <div className='h-[90vh] flex flex-col items-center justify-center text-center text-white bg-black px-4'>
        <h1 className='text-5xl font-semibold tracking-tight sm:text-7xl'>Style Meets Comfort</h1>
        <p className='text-2xl mt-5'>Explore our exclusive collection</p>
        <button
          className='border rounded px-6 py-2 mt-6 hover:bg-white hover:text-black transition'
          onClick={() => navigate('/men')}
        >
          Shop Now
        </button>
      </div>

      {/* Category Section */}
      <section className='py-16 px-4 bg-white'>
        <h2 className='text-4xl sm:text-5xl font-semibold text-center mb-12'>SHOP BY CATEGORY</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {category.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              image={cat.image}
              category={cat.category}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      <Footer/>
    </main>
  )
}

export default Home
