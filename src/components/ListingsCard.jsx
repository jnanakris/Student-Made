import React from 'react'

function ListingsCard({ name = "Product Name", price = 99.99, image = "/placeholder.jpg", active = true }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            {/* Place holder for Image */}
            <div className="h-48 bg-gray-200">
                {image && (
                    <img 
                        src={image} 
                        alt={name} 
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/placeholder.jpg";
                        }}
                    />
                )}
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">${typeof price === 'number' ? price.toFixed(2) : price}</p>
                <div className="flex justify-between">
                    <button className="text-blue-600">Edit</button>
                    {/* Dynamic active circle */}
                    <div className="flex items-center">
                        <span className={`h-3 w-3 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'} mr-2`}></span>
                        <span className="text-sm">{active ? 'Active' : 'Inactive'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingsCard