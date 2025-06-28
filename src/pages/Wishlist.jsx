import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import { CartContext } from '../context/CartContext'

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext)
  const { cartItems, setCartItems } = useContext(CartContext)

  const handleMoveToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id)
    if (exists) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCartItems(updatedCart)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    removeFromWishlist(product.id)
  }

  return (
    <div className='p-8'>
      <h1 className='text-4xl font-bold mb-6 text-center'>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className='text-center text-xl'>Your wishlist is empty 💔</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
          {wishlistItems.map((item) => (
            <div key={item.id} className='border p-4 rounded shadow'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-60 object-cover rounded'
              />
              <h2 className='font-semibold text-xl mt-2 text-center'>{item.name}</h2>
              <p className='text-lg font-bold text-center mt-1'>${item.price}</p>

              <div className='flex justify-between mt-4'>
                <button
                  className='text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800'
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </button>
                <button
                  className='text-sm text-gray-600 border px-4 py-2 rounded hover:bg-red-100'
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
