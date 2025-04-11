import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  // 增加商品数量
  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // 减少商品数量
  const decreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // 添加移除商品的函数
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // 计算小计
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const salesTax = calculateSubtotal() * 0.1; // 10% tax rate
  const deliveryFee = 5.99;
  const total = calculateSubtotal() + salesTax + deliveryFee;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Bag */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500">{item.description}</p>
                      <p className="text-gray-500">{item.size}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden">
                      <button 
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 border-r border-gray-300 focus:outline-none"
                      >
                        −
                      </button>
                      <span className="px-4 select-none">{item.quantity}</span>
                      <button 
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 hover:bg-gray-100 border-l border-gray-300 focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 添加空购物车提示 */}
          {cartItems.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Your bag is empty</p>
            </div>
          )}
        </div>

        {/* Right Side - Summary */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sales Tax</span>
              <span>${salesTax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-4 border-t font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 