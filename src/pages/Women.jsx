import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Women = () => {
const [products, setProducts] = useState([]);
useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>{
    const womenItems = data.filter(product=>product.category==="Women")
    setProducts(womenItems)
  })
  .catch(error => console.error('Error fetching products:', error))
})
  return (
    <div className='py-25 px-4'>
       <h1 className='text-center text-4xl font-bold mb-4'>Women’s Fashion Collection</h1>
       <p className='text-center text-xl text-gray-600 mb-10'>Discover stylish outfits, elegant accessories, and everyday essentials designed to elevate your wardrobe.</p>
      {products.length>0?(
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
      {products.map((product)=>(
        <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        category={product.category}
        rating={product.rating}/>
      ))}
      </div>
      ):(
        <p className="text-center text-gray-500">Loading products...</p>
      )}
    </div>
  )
}

export default Women
