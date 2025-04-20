import React, { useState } from 'react'

import PaymentCard from '../components/PaymentCard'
import ListingsCard from '../components/ListingsCard'

function VendorProfile() {

    // State to track active tab. Set to profile so it loads this before listings
    const [activeTab, setActiveTab] = useState('profile')

    return (
        <div className="w-full mb-15 mx-15">

            {/* Tabs Navigation */}
            <div className="flex border-b mb-10">
                {/* If activeTab set to profile, css is after question mark. If not, its grey */}
                <button 
                    className={`py-3 px-6 font-medium text-lg ${activeTab === 'profile' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Profile
                </button>
                {/* If activeTab set to listings, css is after question mark. If not, its grey */}
                <button 
                    className={`py-3 px-6 font-medium text-lg ${activeTab === 'listings' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('listings')}
                >
                    My Listings
                </button>
            </div>

            {/* Profile Tab Content & conditional rendering */}
            {activeTab === 'profile' && (
                <>
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

                    
                    <PaymentCard/>

                    <button className='bg-green-600 rounded-md text-xl p-2 text-white'>+ Add New Card</button>
                </>
            )}

            {/* Listings Tab Content */}
            {activeTab === 'listings' && (
                <div>
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-4xl font-bold">My Listings</p>
                        <button className="bg-green-600 rounded-md text-xl p-2 text-white">+ Add New Listing</button>
                    </div>
                    
                    {/* Container for Listings card. Uses Grids */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Sample listing card */}
                        <ListingsCard/>
                        
                        {/* Sample listing Card */}
                        <ListingsCard/>
                        
                        {/* Sample listing card*/}
                        <ListingsCard/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VendorProfile