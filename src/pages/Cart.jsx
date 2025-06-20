import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
const {cartItems, setCartItems} = useContext(CartContext);

const handleRemoveCart = (id)=>{
  const updatedCartItems = cartItems.filter(item=>item.id!==id);
  setCartItems(updatedCartItems)
}
const totalPrice = cartItems.reduce((total, item)=>{
  return total + item.price * item.quantity
}, 0)

const handleIncrement = (id)=>{
const updatedCart = cartItems.map(item=>item.id===id?{...item, quantity:item.quantity+1}:item)
setCartItems(updatedCart)
}
const handleDecrement = (id)=>{
  const item = cartItems.find(item=>item.id===id)

  if(item.quantity === 1){
   const updatedCart = cartItems.filter(item=>item.id!==id);
   setCartItems(updatedCart)
  }else{
  const updatedCart = cartItems.map(item=>item.id===id?{...item, quantity:item.quantity-1}:item)
  setCartItems(updatedCart)
  }
}
  return (
    <div className='grid grid-cols-1 m-10'>
      {cartItems.map((item)=>(
        <div key={item.id} className='p-5 border-b-4 border-gray-200'>
            <h2 className='font-bold items-center justify-between'>{item.name}</h2>
            <p className='p-2'>${item.price}</p>
            <div className='flex flex-items-center'>
            <button className='p-2' onClick={()=>handleIncrement(item.id)}>+</button>
            <p className='p-2'>{item.quantity}</p>
            <button className='p-2' onClick={()=>handleDecrement(item.id)}>-</button>
            <button className='border rounded bg-blue-500 hover:bg-blue-600 text-white p-2'
            onClick={()=>handleRemoveCart(item.id)}>Remove</button>
            </div>
        </div>
      ))}
      {totalPrice===0?(<p className='font-bold text-lg text-center'>No Items in cart</p>):
       (<p className='font-semibold text-lg'>Total: ${totalPrice}</p>)
      }
    </div>
  )
}

export default Cart
