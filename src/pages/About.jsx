import React from 'react'

const About = () => {
  return (
    <div className="px-6 py-25 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-black-600">About TrendEase</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to <span className="font-semibold">TrendEase</span> – your one-stop online fashion destination for 
        <span className="font-semibold"> Men, Women, and Kids</span>. We curate stylish, comfortable, and affordable clothing so you and your family can express yourselves confidently every day.
      </p>

      <div className="my-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          At TrendEase, we believe that <strong>fashion should be accessible, effortless, and fun</strong>. 
          Our mission is to bring you the latest trends, timeless classics, and everyday essentials — all in one place.
        </p>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose TrendEase?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>✅ Handpicked quality products</li>
          <li>🚚 Fast and reliable delivery</li>
          <li>🤝 Friendly customer support</li>
          <li>🛍️ Easy shopping experience</li>
          <li>🔄 Hassle-free returns</li>
        </ul>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Word From the Team</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          We’re a small team with a big dream — to make online shopping smoother, smarter, and more stylish.
          Whether you’re revamping your wardrobe or buying something special, we’re here to help you find what you love.
        </p>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 mb-2">Got a question or suggestion?</p>
        <p className="text-lg font-semibold text-black-600">Reach out at: support@trendease.com</p>
      </div>
    </div>
  )
}

export default About
