import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
    <WishlistProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WishlistProvider>
  </CartProvider>
  </StrictMode>,
)
