import React, { useState, useEffect } from 'react'

function ListingsCard({ id, name = "Product Name", price = 99.99, image = "/placeholder.jpg", active = true, onUpdate }) {
    // State to track if edit form is visible
    const [editTab, setEditTab] = useState(false);

    // State to track
    const [editProduct, setEditProduct] = useState({
        //will reflect the current props
        name: name,
        price: price,
        image: image,
        active: active
    });

    useEffect(() => {
        setEditProduct({
            name: name,
            price: price,
            image: image,
            active: active
        });

    }, [name, price, image, active]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditProduct({
            ...editProduct,
            [name]: type === 'checkbox' ? checked : name === 'price' ? parseFloat(value) || '' : value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(onUpdate){
            onUpdate(id, editProduct);
        }

        setEditTab(false);
    }

    // Conditional Rendering that shows form to edit changes for the listing component
    if (editTab) {
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
                {/* Form to edit changes */}
                <form className='space-y-1' onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            name='name'
                            value={editProduct.name}
                            onChange={handleInputChange}
                            className='w-full px-3 py-1 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder="Product Name"/>
                    </div>

                    <div>
                        <input 
                            type="text"
                            name='price'
                            value={editProduct.price}
                            onChange={handleInputChange}
                            className='w-full px-3 py-1 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                            placeholder="Price"/>
                    </div>

                    <div className='flex items-center pl-1'>
                        <input 
                            type="checkbox"
                            id='active'
                            name='active'
                            checked={editProduct.active}
                            onChange={handleInputChange}
                            className='h-4 w-4 rounded'
                        />
                        <label htmlFor="active" className='ml-2 block text-sm text-gray-700'>
                            List as active
                        </label>
                    </div>

                    <div className="flex justify-between mt-3">

                        <div className='space-x-2'>
                            <button 
                                className="bg-green-600 text-white rounded-md text-lg px-2 py-1 border"
                                //Not set to false. But a handle submit. Just a placeholder for now
                                
                            >
                                Confirm
                            </button>

                            <button
                                className=''
                                onClick={() => setEditTab(false)}
                            >
                                Cancel
                            </button>
                        </div>
                        {/* Dynamic active circle */}
                        <div className="flex items-center">
                            <span className={`h-3 w-3 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'} mr-2`}></span>
                            <span className="text-sm">{active ? 'Active' : 'Inactive'}</span>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        );
    }

    // Listing Component
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

                    <button 
                        className="text-blue-600"
                        onClick={() => setEditTab(true)}
                    >
                        Edit
                    </button>
                    
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