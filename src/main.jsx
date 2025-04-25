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
import BuyerProfile from './routes/BuyerProfile.jsx'
import VendorProfile from './routes/VendorProfile.jsx'
import WishList from './routes/Wishlist.jsx'
import Checkout from './routes/Checkout.jsx'
import SignUp from './routes/SignUp.jsx'
import ForgotPassword from './routes/ForgotPassword.jsx'
import ResetPassword from './routes/ResetPassword.jsx'
import BecomeVendor from './routes/BecomeVendor.jsx'

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
      { path: 'signup', element: <SignUp/> },
      { path: 'about', element: <About/> },
      { path: 'forgotPassword', element: <ForgotPassword/>},
      { path: 'resetPassword', element: <ResetPassword/>},
      { path: 'buyer-profile', element: <BuyerProfile/>},
      { path: 'vendor-profile', element: <VendorProfile/> },
      { path: 'wishlist', element: <WishList/> },
      { path: 'checkout', element: <Checkout/> },
      { path: 'buyerprofile', element: <BuyerProfile/>},
      { path: 'becomevendor', element: <BecomeVendor/>},
      
    ],  
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
