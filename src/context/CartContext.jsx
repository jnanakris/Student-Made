import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// TODO: Move to API service file (src/services/api.js)
// const API_BASE_URL = 'your-api-base-url';
// const fetchCartItems = async () => {
//   const response = await fetch(`${API_BASE_URL}/cart`);
//   return response.json();
// };

// TODO: These mock data will be removed when connecting to backend
const initialCartItems = [
  { 
    id: 1, 
    name: "Classic Black T-Shirt", 
    description: "100% Cotton Casual Tee",
    size: "L",
    price: 29.99, 
    quantity: 1, 
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
  },
  { 
    id: 2, 
    name: "Denim Jacket", 
    description: "Vintage Style Denim",
    size: "M",
    price: 89.99, 
    quantity: 1, 
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight Performance Sneakers",
    size: "US 10",
    price: 119.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
  }
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // TODO: Implement these API calls when backend is ready
  const cartActions = {
    // Fetch cart items from backend
    fetchItems: async () => {
      try {
        setLoading(true);
        // const data = await fetchCartItems();
        // setCartItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },

    // Add item to cart
    addItem: async (item) => {
      // TODO: Implement POST request to /api/cart/add
      // try {
      //   const response = await fetch(`${API_BASE_URL}/cart/add`, {
      //     method: 'POST',
      //     body: JSON.stringify(item)
      //   });
      //   const data = await response.json();
      //   setCartItems(prev => [...prev, data]);
      // } catch (err) {
      //   setError(err.message);
      // }
    },

    // Update item quantity
    updateQuantity: async (itemId, quantity) => {
      // TODO: Implement PUT request to /api/cart/update
      // try {
      //   await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      //     method: 'PUT',
      //     body: JSON.stringify({ quantity })
      //   });
      //   setCartItems(prev => prev.map(item => 
      //     item.id === itemId ? { ...item, quantity } : item
      //   ));
      // } catch (err) {
      //   setError(err.message);
      // }
    },

    // Remove item from cart
    removeItem: async (itemId) => {
      // TODO: Implement DELETE request to /api/cart/remove
      // try {
      //   await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      //     method: 'DELETE'
      //   });
      //   setCartItems(prev => prev.filter(item => item.id !== itemId));
      // } catch (err) {
      //   setError(err.message);
      // }
    }
  };

  // TODO: Fetch cart items when component mounts
  // useEffect(() => {
  //   cartActions.fetchItems();
  // }, []);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      setCartItems, 
      cartItemCount,
      loading,
      error,
      ...cartActions 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
} 