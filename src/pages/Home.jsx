import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const Home = () => {
const {cartItems} = useContext(CartContext)
const products = [
    {id:1, name:'Shirt', price:200},
    {id:2, name:'Book', price:100},
    {id:3, name:'Ring', price:500},
    {id:4, name:'T-Shirt', price:100},
]
  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-5'>Welcome to React Cart App</h1>
      <div className='grid grid-cols-4 gap-5 m-10'>
      {products.map((product)=>(
        <ProductCard 
        key={product.id}
        id={product.id}
        name={product.name}
        price = {product.price}
        />
      ))}
    </div>
    </div>
  )
}

export default Home
