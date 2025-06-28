import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Anjali',
    location: 'Bangalore',
    message: 'Loved the fabric quality! Will definitely shop again.',
  },
  {
    id: 2,
    name: 'Rohit',
    location: 'Mumbai',
    message: 'Quick delivery and stylish collections for the whole family!',
  },
  {
    id: 3,
    name: 'Meera',
    location: 'Chennai',
    message: 'My kids love the clothes! Super comfy and cute.',
  },
]

const Testimonials = () => {
  return (
    <div className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-black-600 mb-12">What Our Customers Say</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <FaQuoteLeft className="text-black-500 text-2xl mb-4" />
            <p className="text-gray-700 mb-4 italic">"{item.message}"</p>
            <h4 className="font-semibold text-lg">{item.name}</h4>
            <span className="text-sm text-gray-500">{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
