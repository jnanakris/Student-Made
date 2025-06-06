import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Header() {
    const { cartItemCount } = useCart();

    return (
        <div className='px-10 flex justify-between items-center h-[10vh] bg-(--niner-green) text-white'>
            <h1 className='text-4xl'>
                <Link to="/">Niner Mine</Link>
            </h1>

            <div className='flex items-center grow max-w-[300px] justify-between text-[1.1rem]'>
                <Link to="/about">About</Link>
                <Link to="/products">Shop</Link>
                <Link to="/login">Join/Login</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart" className="flex items-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Header