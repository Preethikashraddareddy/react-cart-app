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
})
  return (
    <div>
       <h1 className='text-center text-4xl text-balance m-10'>Trendy Picks for Kids</h1>
       <p className='text-center text-2xl font-medium'>Fun, colorful, and comfy — explore clothing and accessories your little ones will love.</p>
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

export default Kids
