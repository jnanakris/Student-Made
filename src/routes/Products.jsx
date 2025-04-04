import React from 'react'

import ProductCard from '../components/ProductCard'

function Products() {
    return (
        <div className='pt-10 flex flex-col items-center'>
            <p className='text-4xl font-bold'>
                Shop
            </p>

            <div className='flex flex-row flex-wrap justify-center p-10'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default Products