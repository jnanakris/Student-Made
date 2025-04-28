import React from 'react'

function ProductCard({ prodImg, prodName, prodRating, prodPrice }) {
    return (
        <div className='flex flex-col w-full sm:w-64 md:w-72 lg:w-[38vh] h-auto sm:h-[40vh] md:h-[45vh] rounded-2xl m-2 shadow-md hover:shadow-xl transition-shadow duration-300 items-center pb-4'>
            <div className='relative w-full h-48 sm:h-auto sm:pt-[60%] overflow-hidden rounded-t-2xl'>
                <img 
                    src={prodImg || "/assets/example-image.jpg"} 
                    alt={prodName || "Product image"} 
                    className='absolute inset-0 w-full h-full object-cover rounded-t-xl'
                />
            </div>

            <div className='px-4 pt-3 w-full'>
                <p className='text-lg sm:text-xl font-medium truncate'>
                    {prodName || "Product Name"}
                </p>

                <p className='my-1 sm:my-2 text-sm sm:text-base text-yellow-500'>
                    {prodRating || "★★★★☆"}
                </p>

                <p className='font-semibold text-base sm:text-lg'>
                    ${prodPrice?.toFixed(2) || "Xx.xx"}
                </p>
            </div>
        </div>
    )
}

export default ProductCard