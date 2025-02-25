import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginProvider from './contexts/LoginContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <LoginProvider>
      <App />
    </LoginProvider>
  </CartContextProvider>,
)
