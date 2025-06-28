import { createContext, useState } from 'react'

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([])

  const addToWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id)
    if (!exists) {
      setWishlistItems([...wishlistItems, product])
    }
  }

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter(item => item.id !== id)
    setWishlistItems(updated)
  }

  const toggleWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id)
    exists ? removeFromWishlist(product.id) : addToWishlist(product)
  }

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}
