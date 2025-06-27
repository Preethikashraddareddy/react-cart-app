import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Men = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('/products.json')
    .then(res=>res.json())
    .then(data=>{
      const menItems = data.filter(item=>item.category==="Men");
      setProducts(menItems)
    })
  }, [])

  
  return (
    <div>
      <h1 className='text-center text-4xl text-balance m-10'>Explore Men's Fashion</h1>
      <p className='text-center text-2xl font-medium'>Find everyday essentials and trending styles curated just for men.</p>
      <div className='grid grid-cols-3 gap-5 m-10'>
      {products.map((product)=>(
        <ProductCard 
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        category={product.category}
        rating={product.rating}
        />
      ))}
    </div>
    </div>
  )
}

export default Men;
