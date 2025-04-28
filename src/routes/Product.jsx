import React from 'react'

function Product() {
  return (
    <div className='flex flex-col w-full mt-8 '>
        {/* Product with description */}
        <div className='flex flex-row w-full h-[50vh] px-25'>
            
            {/* Product image container */}
            <div className='w-7/16 h-auto flex justify-center'>
                {/* Image place holder */}
                <div className='bg-black w-3/4 h-3/4'></div>
                
                {/* Carousel container */}
                <div className=''>
                  <div></div>
                  <div className='bg-black '></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
            <div className='flex flex-col justify-start space-y-2 w-full'>
                <p className='text-5xl font-semibold'>Product Name</p>
                <p className='text-xl'>Rating</p>
                <p className='text-3xl font-semibold'>$99.99</p>

                <button className='w-2/3 rounded-full bg-green-600 text-white py-1 mt-10 font-semibold'>Add To Card</button>

                <span className='self-center border-b w-full mt-5'>  </span>
                <p className='self-center'>Add to wishlist</p>
            </div>
        </div>
    </div>
  )
}

export default Product