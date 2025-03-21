import React from 'react'
import VendorIMG from '../assets/person-example.jpg'

function CreatorBubble({ imgSource, name}) {
    return (
        <div className='w-60 h-60 flex flex-col items-center'>
            <img src={VendorIMG} alt="Vendor icon" className='rounded-full w-13/18'/>
            <p className='text-[1.25em] pt-3'>
                John Doe
            </p>
        </div>
    )
}

export default CreatorBubble