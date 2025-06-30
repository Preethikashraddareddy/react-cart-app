import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('')

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // 🔍 Filter by search term
  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 🔽 Sort logic
  if (sortOption === 'lowToHigh') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortOption === 'highToLow') {
    filtered.sort((a, b) => b.price - a.price)
  }

  return (
    <div className='p-10 py-25'>
      <h1 className='text-center text-4xl font-bold mb-6'>All Products</h1>

      {/* Search & Sort controls */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center mb-8'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full md:w-1/2 border px-4 py-2 rounded'
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className='w-full md:w-1/4 border px-4 py-2 rounded'
        >
          <option value=''>Sort by</option>
          <option value='lowToHigh'>Price: Low to High</option>
          <option value='highToLow'>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          ))
        ) : (
          <p className='text-center col-span-3'>No products found.</p>
        )}
      </div>
    </div>
  )
}

export default AllProducts
