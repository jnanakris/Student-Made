import React from 'react'

function PaymentCard() {
    return (
        <div className="w-1/4 flex flex-col items-start border-2 rounded-lg mb-10">
                <p className='text-2xl font-semibold border-b-2 w-full py-2 pl-2'>Card #1</p>
                <form className='w-full px-2 py-4 space-y-2'>
                    {/* Card Number Form */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='Card Number'/>
                    </div>
                    
                    {/* Exp. Date and CVC Forms */}
                    <div className='flex flex-row space-x-2'>
                        <div>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='Exp. Date (MM/YY)'/>
                        </div>
                        <div>
                            <input 
                                type="text"
                                className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                                placeholder='CVC'/>
                        </div>
                    </div>

                    {/* Name On Card Form */}
                    <div>
                        <input 
                            type="text"
                            className='w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder='Name On Card'/>
                    </div>
                </form>
            </div>
    )
}

export default PaymentCard