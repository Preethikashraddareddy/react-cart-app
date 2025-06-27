import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
const {cartItems} = useContext(CartContext)
const [category, setCategory] = useState([])

useEffect(()=>{
  fetch('/Categories.json')
  .then(res=>res.json())
  .then(data=>setCategory(data))
}, [])

  return (
    <div>
      <div className='h-[90vh] flex flex-col items-center justify-center text-center text-white bg-black'>
      <h1 className='text-5xl font-semibold tracking-tight text-balance sm:text-7xl '>Style Meets Comfort</h1>
      <p className='text-balance text-center text-2xl mt-5'>Explore our exclusive collection</p>
      <button className='border rounded p-2 mt-5'>Shop Now</button>
      </div>
      <div className='h-[80vh]'>
      <h2 className='text-5xl font-semibold text-balance text-center m-10'>SHOP BY CATEGORY</h2>
      <div className='grid grid-cols-3 gap-5 m-10'>
      {category.map((category)=>(
        <CategoryCard 
        key={category.id}
        id={category.id}
        name={category.name}
        image={category.image}
        category={category.category}
        />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Home
