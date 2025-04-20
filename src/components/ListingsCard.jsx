import React from 'react'

function ListingsCard() {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            {/* Place holder for Image */}
            <div className="h-48 bg-gray-200"></div>

            <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Product Name</h3>
                <p className="text-gray-600 mb-2">$99.99</p>
                <div className="flex justify-between">
                    <button className="text-blue-600">Edit</button>
                    {/* Green active circle */}
                    <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">Active</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingsCard