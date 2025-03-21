import React from 'react'
import VendorIMG from '../assets/person-example.jpg'

function CreatorBubble({ imgSource, name}) {
    return (
        <div className='w-60 h-60'>
            <img src={VendorIMG} alt="Vendor icon" className='rounded-full w-2/3'/>
            <p className=''>
                John Doe
            </p>
        </div>
    )
}

export default CreatorBubble