import React from 'react'

function Footer() {
    return (
        <div className='h-[30vh] flex justify-evenly px-10 bg-gray-300 text-black items-center'>

            <div>
                <h1 className='text-6xl'>Niner Mine</h1>
            </div>

            <div className='text-[1.2rem] pl-50'>

                <div className='flex flex-row p-5 text-black'>
                    {/* First Section - Links */}
                    <div className='mx-10'>
                        <p className='text-2xl font-bold'>Explore</p>
                        <div className='text-lg mt-2 space-y-1'>
                            <p>Become a Vendor</p>
                        </div>
                    </div>

                    {/* Second Section - Contact Us */}
                    <div>
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <div className='text-lg mt-2 space-y-1'>
                            <p>Email: <a href="mailto:support@example.com" className='text-blue-400'>support@example.com</a></p>
                            <p>Phone: <a href="tel:+1234567890" className='text-blue-400'>(123) 456-7890</a></p>
                            <p>Follow us: 
                                <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className='ml-2 text-blue-400'>Instagram</a> | 
                                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className='ml-2 text-blue-400'>Twitter</a>
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer