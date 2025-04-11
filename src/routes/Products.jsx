import React from 'react'

import ProductCard from '../components/ProductCard'

function Products() {
    return (
        <div className='pt-10 flex flex-col items-center'>
            <p className='text-4xl font-bold'>
                Shop
            </p>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 w-full'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products