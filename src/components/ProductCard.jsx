import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { WishlistContext } from '../context/WishListContext'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

const ProductCard = ({ id, name, price, image, category, rating }) => {
  const { cartItems, setCartItems } = useContext(CartContext)
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext)

  const isWishlisted = wishlistItems.some(item => item.id === id)

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === id)
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { id, name, price, image, quantity: 1 }])
      console.log('Item added to cart')
    }
  }

  return (
    <div className='relative border rounded shadow p-4 h-140' key={id}>
      <img src={image} alt={name} className='w-full h-100 object-cover rounded mb-2' />

      <h2 className='font-semibold text-center p-2'>{name}</h2>

      {/* Price & Wishlist Row */}
      <div className='flex items-center justify-between px-2 mb-2'>
        <p className='text-[#303030] font-bold text-lg'>₹{price}</p>
        <button
          onClick={() => toggleWishlist({ id, name, price, image })}
          className='text-gray-600 hover:text-red-500 transition-colors'
        >
          {isWishlisted ? <IoHeart size={22} /> : <IoHeartOutline size={22} />}
        </button>
      </div>

      <button
        className='bg-black hover:bg-[#5e5e5e] border rounded-xl text-white px-5 py-3 w-full'
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
