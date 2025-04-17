import React from 'react'

import PaymentCard from '../components/PaymentCard'

function BuyerProfile() {
    return (
        <div className="w-full mb-15 mx-15">
            <p className="text-4xl font-bold my-15 place-self-center">Profile</p>

            <p className="text-3xl font-semibold opacity-75 mb-7">Delivery</p>

            {/* Div for Delivery Form */}
            <div className="w-full flex flex-col items-start mb-20">
                <form className='w-4/12 space-y-2'>
                    {/* Country Form */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='United States'/>
                    </div>
                    
                    {/* First and Last Name Forms */}
                    <div className='flex flex-row space-x-2'>
                        <div className='flex-1'>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='First'/>
                        </div>
                        <div className='flex-1'>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='Last'/>
                        </div>
                    </div>

                    {/* Address Form */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='Address'/>
                    </div>

                    {/* Optional Form for Apartment, Suite, etc. */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='Apartment, Suite, etc. (Optional)'/>
                    </div>

                    {/* City, State, and ZIP Form */}
                    <div className='flex flex-row space-x-2'>
                        <div className='flex-1'>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='City'/>
                        </div>
                        <div className='flex-1'>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='State'/>
                        </div>
                        <div className='flex-1'>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='ZIP'/>
                        </div>
                    </div>

                    {/* Phone Number Form */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='Phone Number'/>
                    </div>
                </form>
            </div>

            <p className="text-3xl font-semibold opacity-75 mb-7">Payment</p>

            {/* Div for  */}
            <PaymentCard/>

            <button className='bg-(--accent-green) rounded-md text-xl p-2'>+ Add New Card</button>
        </div>
    )
}

export default BuyerProfile