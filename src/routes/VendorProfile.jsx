import React, { useState } from 'react'

import PaymentCard from '../components/PaymentCard'
import ListingsCard from '../components/ListingsCard'

function VendorProfile() {
    // State to track active tab. Set to profile so it loads this before listings
    const [activeTab, setActiveTab] = useState('profile')

    // State to control visibility of add listing form. Used for conditional rendering
    const [showAddForm, setShowAddForm] = useState(false)

    // State to store listings data. 1 & 2 are sample listings that pop up when the user opens the page.
    const [listings, setListings] = useState([
        { id: 1, name: "Product Name", price: 99.99, image: "/placeholder.jpg", active: true },
        { id: 2, name: "Another Product", price: 149.99, image: "/placeholder.jpg", active: true }
    ])

    // State for form data. Houses form input from the user
    const [newListing, setNewListing] = useState({
        name: '',
        price: '',
        image: '',
        description: '',
        active: true
    })

    // Handle form input changes. Updates anytime we make a change to the form
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewListing({
            ...newListing,
            [name]: name === 'price' ? parseFloat(value) || '' : value
        })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Add new listing to the array
        const updatedListings = [
            // Copies all the other listings from the listings state
            ...listings,
            {
                // Gives unique ID while copying the rest of the newListings from the state
                id: Date.now(), // Simple unique ID
                ...newListing
            }
        ]
        
        // Updates the Listings using setListings, uses the new updatedListings Array.
        setListings(updatedListings)
        
        // Reset form and hide it
        setNewListing({
            name: '',
            price: '',
            image: '',
            description: '',
            active: true
        })

        // Set ShowAddForm to false to close the conditional rendering
        setShowAddForm(false)
    }

    const handleUpdateListing = (id, updatedData) => {
        
        const updatedListings = listings.map(listing => 
            listing.id === id ? {...listing, ...updatedData } : listing
        );

        setListings(updatedListings);
    };

    return (
        <div className="w-full mb-15 mx-15">
            {/* Tabs Navigation */}
            <div className="flex border-b mb-10">
                <button 
                    className={`py-3 px-6 font-medium text-lg ${activeTab === 'profile' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Profile
                </button>
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
                        <button 
                            className="bg-green-600 rounded-md text-xl p-2 text-white"
                            // Conditional rendering to show form using state hook
                            onClick={() => setShowAddForm(true)}
                        >
                            + Add New Listing
                        </button>
                    </div>
                    
                    {/* Add Listing Form - Show when showAddForm is true */}
                    {showAddForm && (
                        <div className="bg-gray-50 p-6 mb-8 rounded-lg border">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-semibold">Add New Listing</h3>
                                <button 
                                    className="text-gray-500 hover:text-gray-700"
                                    // Closes form using conditional rendering with state hook
                                    onClick={() => setShowAddForm(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newListing.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Price ($)
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={newListing.price}
                                        onChange={handleInputChange}
                                        step="0.01"
                                        min="0"
                                        className="w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={newListing.image}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                        placeholder="https://example.com/image.jpg"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        //Descritption for product
                                        //value={newListing.image}
                                        //onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                        required
                                    />
                                </div>
                                
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="active"
                                        name="active"
                                        checked={newListing.active}
                                        onChange={(e) => setNewListing({...newListing, active: e.target.checked})}
                                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                                        List as active
                                    </label>
                                </div>
                                
                                <div className="flex justify-end space-x-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddForm(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                                    >
                                        Add Listing
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    
                    {/* Container for Listings card. Uses Grids */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Map through listings and render ListingsCard component for each */}
                        {listings.map(listing => (
                            <ListingsCard 
                                key={listing.id}
                                id={listing.id}
                                name={listing.name}
                                price={listing.price}
                                image={listing.image}
                                active={listing.active}
                                onUpdate={handleUpdateListing}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default VendorProfile