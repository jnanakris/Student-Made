import React from 'react'

function CategoryCard({ imgSrc, category}) {
    return (
        <div className='w-70 h-80 relative rounded-xl overflow-hidden shadow-lg cursor-pointer mx-[2vh] flex-shrink-0'>
            <img src={imgSrc} alt="Category Image" className='w-full h-full object-cover'/>
            <p className='absolute inset-0 flex items-center justify-center text-white text-3xl font-bold outlined-text'>
                {category}
                </p>
        </div>
    )
}

export default CategoryCard