import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = {
    name: 'JohnDee',
    email: 'john@example.com',
    phone: '+91 9876543210',
    address: 'Bangalore, India'
  }

  const orders = [
    {
      id: 'ORD001',
      product: 'Casual Shirt',
      date: '2024-06-10',
      status: 'Delivered',
      total: 899
    },
    {
      id: 'ORD002',
      product: 'Denim Jacket',
      date: '2024-05-28',
      status: 'Shipped',
      total: 1599
    }
  ]

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>My Profile</h1>

      {/* 👤 User Info */}
      <div className='bg-white shadow rounded p-6 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>User Information</h2>
        <p><span className='font-medium'>Name:</span> {user.name}</p>
        <p><span className='font-medium'>Email:</span> {user.email}</p>
        <p><span className='font-medium'>Phone:</span> {user.phone}</p>
        <p><span className='font-medium'>Address:</span> {user.address}</p>
      </div>

      {/* 🛒 Orders */}
      <div className='bg-white shadow rounded p-6 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>My Orders</h2>
        {orders.length > 0 ? (
          <div className='space-y-4'>
            {orders.map(order => (
              <div key={order.id} className='border-b pb-2'>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Product:</strong> {order.product}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Total:</strong> ₹{order.total}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders yet.</p>
        )}
      </div>

      {/* ❤️ Wishlist + ⚙️ Actions */}
      <div className='bg-white shadow rounded p-6 flex flex-col md:flex-row justify-between items-center gap-4'>
        <Link
          to='/wishlist'
          className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800'
        >
          View Wishlist
        </Link>
        <button className='border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-100'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Profile

