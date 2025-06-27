import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ id, name, price, image, category, rating }) => {
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
   <div className='border rounded shadow p-4 h-140' key={id}>
    <img src={image} alt={name}  className="w-full h-100 object-cover"/>
     <h2 className='font-semibold text-center p-2'>{name}</h2>
     <p className='text-[#303030] text-left font-bold p-1 text-xl'>${price}</p>
    <button className='bg-black hover:bg-[#5e5e5e] border rounded-xl text-white px-5 py-3 w-full'
    onClick={()=>handleAddToCart(id)}>Add to Cart</button>
   </div>
  )
}

export default ProductCard
