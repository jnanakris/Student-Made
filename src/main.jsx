import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import Cart from './routes/Cart.jsx'

import About from './routes/About.jsx'
import LoginPage from './routes/LoginPage.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>, // Root Layout
    children: [
      { index: true, element: <Home/> },
      { path: 'products', element: <Products/> },
      { path: 'cart', element: <Cart/> },
      { path: 'login', element: <LoginPage/> },
      { path: 'about', element: <About/> },
    ],  
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
