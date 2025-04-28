import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { AuthContext } from '../routes/AuthContent';

function Header() {
    const { cartItemCount } = useCart();
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsMobileMenuOpen(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            if (isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <nav className='px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-center h-[10vh] bg-(--niner-green) text-white'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight'>
                <Link to="/">Niner Mine</Link>
            </h1>

            {/* Mobile menu button */}
            <button 
                className="md:hidden p-2 rounded-md focus:outline-none" 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {/* Desktop menu */}
            <div className='hidden md:flex items-center justify-between w-full max-w-[500px] text-base lg:text-lg font-medium'>
                <Link to="/about" className="px-2 lg:px-3 hover:text-gray-300">About</Link>
                <Link to="/shop-all" className="px-2 lg:px-3 hover:text-gray-300">Shop</Link>
                
                {isLoggedIn ? (
                    <div className="relative px-2 lg:px-3">
                        <button 
                            onClick={toggleDropdown}
                            className="hover:text-gray-300 rounded hover:bg-green-700 transition-colors"
                        >
                            My Profile
                        </button>
                        
                        {isDropdownOpen && (
                            <div 
                                className="absolute right-0 mt-1 w-44 bg-gray-200 rounded-md shadow-lg z-50 border border-gray-300 overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link 
                                    to="/buyerprofile" 
                                    className="block px-4 py-2.5 text-gray-800 hover:bg-gray-300 text-[0.95rem] font-medium transition-colors"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Profile
                                </Link>
                                <div className="border-t border-gray-400 mx-2"></div>
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-2.5 text-gray-800 hover:bg-gray-300 text-[0.95rem] font-medium transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="px-2 lg:px-3 hover:text-gray-300">Join/Login</Link>
                )}
                
                <Link to="/wishlist" className="px-2 lg:px-3 hover:text-gray-300">Wishlist</Link>
                <Link to="/cart" className="flex items-center relative px-2 lg:px-3 hover:text-gray-300">
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

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full pt-2 pb-3 space-y-1">
                    <Link 
                        to="/about" 
                        className="block px-3 py-2 hover:bg-green-700 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        to="/shop-all" 
                        className="block px-3 py-2 hover:bg-green-700 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Shop
                    </Link>
                    
                    {isLoggedIn ? (
                        <>
                            <Link 
                                to="/buyerprofile" 
                                className="block px-3 py-2 hover:bg-green-700 rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                My Profile
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="block w-full text-left px-3 py-2 hover:bg-green-700 rounded-md"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link 
                            to="/login" 
                            className="block px-3 py-2 hover:bg-green-700 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Join/Login
                        </Link>
                    )}
                    
                    <Link 
                        to="/wishlist" 
                        className="block px-3 py-2 hover:bg-green-700 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Wishlist
                    </Link>
                    <Link 
                        to="/cart" 
                        className="flex items-center justify-between px-3 py-2 hover:bg-green-700 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span>Cart</span>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Header