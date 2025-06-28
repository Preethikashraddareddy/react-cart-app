import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext)

  const handleRemoveCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCartItems)
  }

  const handleIncrement = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCartItems(updatedCart)
  }

  const handleDecrement = (id) => {
    const item = cartItems.find(item => item.id === id)
    if (item.quantity === 1) {
      const updatedCart = cartItems.filter(item => item.id !== id)
      setCartItems(updatedCart)
    } else {
      const updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      setCartItems(updatedCart)
    }
  }

  const handleCheckout = () => {
    alert('Order Placed Successfully!')
    setTimeout(() => setCartItems([]), 2000)
  }

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-6xl mx-auto pt-28 px-4 pb-16"> {/* pt-28 fixes navbar overlap */}
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No items in cart.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="border p-4 rounded shadow flex flex-col md:flex-row items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mb-4 md:mb-0"
                />

                <div className="flex-1 md:ml-6 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <button
                        className="border px-3 py-1"
                        onClick={() => handleDecrement(item.id)}
                      >
                        −
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        className="border px-3 py-1"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <button
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                      onClick={() => handleRemoveCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6">
            <p className="text-xl font-semibold mb-4 md:mb-0">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
