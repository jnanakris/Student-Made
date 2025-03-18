import React from 'react'
import RingImage from "../assets/example-image.jpg"

function CategoryCard({ imgSrc, category}) {
    return (
        <div className='w-45 h-80 relative rounded-xl overflow-hidden shadow-lg cursor-pointer mx-[2vh]'>
            <img src={RingImage} alt="Ring example image" className='w-full h-full object-cover'/>
            <p className='absolute inset-0 flex items-center justify-center text-white text-3xl font-bold outlined-text'>
                Rings
                </p>
        </div>
    )
}

export default CategoryCard