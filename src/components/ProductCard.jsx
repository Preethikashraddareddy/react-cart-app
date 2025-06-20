import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({id, name, price}) => {
const {cartItems, setCartItems} = useContext(CartContext);

const handleAddToCart = (id)=>{
  const existingItem = cartItems.find(item=>item.id===id)
  if(existingItem){
    const updatedCart = cartItems.map(item=>item.id===id?{...item, quantity:item.quantity+1}:item)
    setCartItems(updatedCart)
  }else{ 
    setCartItems([...cartItems,{id, name, price, quantity:1}])
    console.log("Items added to cart")
  }
}

  return (
   <div className='border rounded border-b-stone-400 p-2' key={id}>
     <h2 className='font-semibold text-center'>{name}</h2>
     <p className='text-green-600 text-left'>${price}</p>
    <button className='bg-blue-500 hover:bg-blue-600 border rounded text-white px-5 py-2 w-full'
    onClick={()=>handleAddToCart(id)}>Add to Cart</button>
   </div>
  )
}

export default ProductCard
