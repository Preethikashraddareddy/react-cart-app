import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Kids = () => {
const [products, setProducts] = useState([]);
useEffect(()=>{
  fetch('./products.json')
  .then(res=>res.json())
  .then(data=>{
    const kidsItems = data.filter(product=>product.category==="Kids")
    setProducts(kidsItems)
  })
  .catch(error => console.error('Error fetching products:', error))
})
  return (
    <div className='py-24 px-4'>
       <h1 className='text-center text-4xl font-bold mb-4'>Trendy Picks for Kids</h1>
       <p className='text-center text-xl text-gray-600 mb-10'>Fun, colorful, and comfy — explore clothing and accessories your little ones will love.</p>
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

export default Kids
