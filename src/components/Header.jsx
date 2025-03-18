import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='px-10 flex justify-between items-center h-[10vh] bg-(--niner-green) text-white'>
            <h1 className='text-4xl'>
                <Link to="/">Niner Mine</Link>
            </h1>

            <div className='flex items-center grow max-w-[250px] justify-between text-[1.1rem]'>
                <Link to="/about" >About</Link>
                <Link to="/products">Shop</Link>
                <Link to="/login">Join/Login</Link>
            </div>
        </div>
    )


}

export default Header