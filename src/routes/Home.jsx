import React from 'react'
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'

import categoryData from '../data/categories.json';

import CategoryCard from '../components/CategoryCard'

function Home() {
    const [emblaRef] = useEmblaCarousel({ loop: true});

    return (
        <div className='flex flex-col'>
            
            {/* Hero/poster when user first opens the website */}

            <div className='w-screen h-[80vh] bg-black text-white flex items-center justify-center'>
                
                {/* Buttons that can lead to shopping page */}

            </div>
        
            {/* Category section, will contain category cards. horizontal scroll */}

            <div className='w-screen h-[60vh] bg-(--niner-gold) flex flex-col'>

                <p className='py-15 text-6xl text-white '>
                    Shop By Category
                </p>

                
                    {/* Embla Carousel Wrapper */}
                <div ref={emblaRef} className='overflow-hidden w-full'>
                <div className='flex'>
                    {categoryData.categories.map((cat, index) => (
                        <div key={index} className='flex-shrink-0 min-w-[250px] mx-2'>
                        <Link to={cat.link}>
                            <CategoryCard imgSrc={cat.img} category={cat.name} />
                        </Link>
                        </div>
                    ))}
                    </div>
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