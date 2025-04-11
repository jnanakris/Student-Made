import React from 'react'

function BuyerProfile() {
    return (
        <div className="w-full">
            <p className="text-4xl font-bold my-15 place-self-center">Profile</p>

            <div className="flex flex-col items-start mx-15">
                <p className="text-3xl font-semibold opacity-75 mb-10">Delivery</p>
                <form className='flex flex-col space-y-20'>
                    <div>
                        <input
                        type="text"
                        className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                        placeholder="United States"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BuyerProfile