import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

// Mock 数据
const initialWishlistItems = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    description: "Genuine leather jacket with modern design",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww",
    color: "Brown",
    size: "L"
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    description: "Comfortable everyday sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    color: "White",
    size: "42"
  }
];

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  // TODO: 实现与后端的集成
  const wishlistActions = {
    // 获取愿望清单
    fetchWishlist: async () => {
      // TODO: Implement GET request to /api/wishlist
    },

    // 添加商品到愿望清单
    addToWishlist: async (item) => {
      // TODO: Implement POST request to /api/wishlist/add
    },

    // 从愿望清单中移除商品
    removeFromWishlist: (itemId) => {
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
      // TODO: Implement DELETE request to /api/wishlist/remove/${itemId}
    },
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, ...wishlistActions }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
} 