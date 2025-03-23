import React from 'react' 
import CategoryCard from '../components/CategoryCard'

function Home() {
    return (
        <div className='flex flex-col'>
            
            {/* Hero/poster when user first opens the website */}

            <div className='w-screen h-[80vh] bg-black text-white flex items-center justify-center'>
                
                {/* Buttons that can lead to shopping page */}

            </div>
        
            {/* Category section, will contain category cards. horizontal scroll */}

            <div className='w-screen h-[60vh] bg-(--niner-gold) flex flex-col '>

                <p className='py-15 text-6xl text-white '>
                    Shop By Category
                </p>

                <div className=''>
                    <CategoryCard/>
                </div>

            </div>

            {/* Featured items that are being sold. Could use the creator bubble for this */}

            <div className=''>

            </div>

            {/* Vendors sections. Horizontal scroll that includes all the vendors available */}

            <div className=''>

            </div>

        </div>
    )
}

export default Home