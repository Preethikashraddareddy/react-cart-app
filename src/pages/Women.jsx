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
})
  return (
    <div>
       <h1 className='text-center text-4xl text-balance m-10'>Women’s Fashion Collection</h1>
       <p className='text-center text-2xl font-medium'>Discover stylish outfits, elegant accessories, and everyday essentials designed to elevate your wardrobe.</p>
      <div className='grid grid-cols-3 gap-5 m-10'>
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
    </div>
  )
}

export default Women
