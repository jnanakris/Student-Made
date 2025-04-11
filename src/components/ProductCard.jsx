import React from 'react'



function ProductCard({ prodImg, prodName, prodRating, prodPrice }) {
    return (
        <div className='flex flex-col w-[38vh] h-[45vh] rounded-2xl m-2 shadow-md hover:shadow-xl items-center'>

            <img src="/assets/example-image.jpg" alt="Example image" className='w-[80%] h-[60%] rounded-xl mt-3 mb-7'/>

            <p className='text-xl'>
                product Name
            </p>

            <p className='my-2'>
                Rating
            </p>

            <p className='font-semibold'>
                $Xx.xx
            </p>
        </div>
    )
}

export default ProductCard