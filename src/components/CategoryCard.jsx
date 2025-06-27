import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({id, name, image, category}) => {
const navigate = useNavigate()
const handleCategoryClick = (category)=>{
navigate(`/${category.toLowerCase()}`)
}
  return (
    <div>
      <div className='border rounded shadow p-4 h-120' key={id}>
      <img src={image} alt={name}  className="w-full h-100 object-cover" onClick={()=>handleCategoryClick(category)}/>
      <h2 className='font-semibold text-center text-3xl p-2'>{name}</h2>
   </div>
    </div>
  )
}

export default CategoryCard
