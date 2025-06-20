import React from 'react'

const ProductCard = () => {
const products = [
    {id:1, name:'Shirt', price:200},
    {id:2, name:'Book', price:100},
    {id:3, name:'Ring', price:500},
    {id:4, name:'T-Shirt', price:100},
]
  return (
    <div className='grid grid-cols-4 gap-5 m-10'>
      {products.map((product)=>(
        <div key={product.id} className='border rounded border-b-stone-400 p-2'>
            <h2 className='font-semibold text-center'>{product.name}</h2>
            <p className='text-green-600 text-left'>${product.price}</p>
            <button className='bg-blue-500 hover:bg-blue-600 border rounded text-white px-5 py-2 w-full'>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
