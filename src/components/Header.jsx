import React from 'react'

function Header() {
    return (
        <div className='px-10 flex justify-between items-center h-[10vh] bg-(--niner-green) text-white'>
            <h1 className='text-4xl'>Niner Mine</h1>

            <div className='flex items-center grow max-w-[200px] justify-between'>
                <p>About</p>
                <p>Shop</p>
                <p>Join/Login</p>
            </div>
        </div>
    )


}

export default Header