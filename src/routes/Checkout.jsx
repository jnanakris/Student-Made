import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Country, State } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useCart();
  const [deliveryOption, setDeliveryOption] = useState('shipping');
  const [billingAddressSameAsShipping, setBillingAddressSameAsShipping] = useState(true);
  
  // 添加国家和州的状态
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('US'); // 默认选择美国

  // 添加表单状态
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    country: 'US'
  });

  // 添加错误状态
  const [errors, setErrors] = useState({});

  // 修改表单验证逻辑
  const validateForm = () => {
    const newErrors = {};
    
    // 更新必填字段列表
    const requiredFields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      address1: 'Address',
      zipCode: 'ZIP Code',
      city: 'City',
      state: 'State',
      phoneNumber: 'Phone Number',
      cardNumber: 'Card Number',
      expirationDate: 'Expiration Date',
      securityCode: 'Security Code'
    };

    // 检查必填字段
    Object.keys(requiredFields).forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${requiredFields[field]} is required`;
      }
    });

    // 特殊验证逻辑
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber.replace(/\D/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    if (formData.expirationDate && !/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = 'Please enter a valid date (MM/YY)';
    }

    if (formData.securityCode && !/^\d{3,4}$/.test(formData.securityCode)) {
      newErrors.securityCode = 'Please enter a valid security code';
    }

    // 检查国家选择
    if (!selectedCountry) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 修改支付处理逻辑
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePayment = () => {
    setIsSubmitting(true);
    const isValid = validateForm();
    
    if (isValid) {
      // 模拟支付成功
      setTimeout(() => {
        alert('Payment successful!');
        setCartItems([]); // 清空购物车
        navigate('/'); // 返回首页
      }, 1000);
    } else {
      alert('Please fill in all required fields correctly.');
      setIsSubmitting(false); // 重置提交状态，允许再次点击
    }
  };

  // 在表单输入变化时重置提交状态
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除该字段的错误
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setIsSubmitting(false); // 重置提交状态
  };

  // 初始化国家列表
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
    
    // 初始化美国的州列表
    const countryStates = State.getStatesOfCountry('US');
    setStates(countryStates);
    
    // 设置默认国家到 formData
    setFormData(prev => ({
      ...prev,
      country: 'US'
    }));
  }, []);

  // 当国家改变时更新州列表
  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    const countryStates = State.getStatesOfCountry(countryCode);
    setStates(countryStates);
    
    // 更新 formData 中的 country
    setFormData(prev => ({
      ...prev,
      country: countryCode
    }));
    
    // 清除 country 相关的错误
    if (errors.country) {
      setErrors(prev => ({
        ...prev,
        country: ''
      }));
    }
  };

  // 计算金额
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const salesTax = calculateSubtotal() * 0.1; // 10% tax rate
  const shipping = 'TBD'; // 运费待定
  const total = calculateSubtotal() + salesTax;

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Forms */}
        <div className="lg:w-2/3 space-y-8">
          {/* Delivery Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Delivery</h2>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="shipping"
                    name="deliveryOption"
                    value="shipping"
                    checked={deliveryOption === 'shipping'}
                    onChange={(e) => setDeliveryOption(e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="shipping" className="flex flex-col">
                    <span className="font-medium">Shipping</span>
                    <span className="text-sm text-gray-500">Enter your full address to see available options.</span>
                  </label>
                </div>

                {deliveryOption === 'shipping' && (
                  <div className="ml-7 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          FIRST NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.firstName ? 'border-red-500' : ''}`}
                          placeholder="First Name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          LAST NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.lastName ? 'border-red-500' : ''}`}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ADDRESS 1 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded mb-2 ${errors.address1 ? 'border-red-500' : ''}`}
                        placeholder="Address 1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ADDRESS 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Address 2"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          COUNTRY <span className="text-red-500">*</span>
                        </label>
                        <select 
                          name="country"
                          value={selectedCountry}
                          onChange={(e) => handleCountryChange(e.target.value)}
                          className={`w-full p-2 border rounded ${errors.country ? 'border-red-500' : ''}`}
                        >
                          {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP CODE <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.zipCode ? 'border-red-500' : ''}`}
                          placeholder="ZIP Code"
                        />
                      </div>
                      <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CITY <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.city ? 'border-red-500' : ''}`}
                          placeholder="City"
                        />
                      </div>
                      <div className="w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          STATE <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded ${errors.state ? 'border-red-500' : ''}`}
                        >
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PHONE NUMBER <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded ${errors.phoneNumber ? 'border-red-500' : ''}`}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment  Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Payment </h2>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">Transactions are secure and encrypted.</p>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  <span className="font-medium">Card</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CARD NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded ${errors.cardNumber ? 'border-red-500' : ''}`}
                      placeholder="1234 1234 1234 1234"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        EXPIRATION DATE <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded ${errors.expirationDate ? 'border-red-500' : ''}`}
                        placeholder="MM / YY"
                      />
                      {errors.expirationDate && (
                        <p className="text-red-500 text-xs mt-1">{errors.expirationDate}</p>
                      )}
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        SECURITY CODE <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded ${errors.securityCode ? 'border-red-500' : ''}`}
                        placeholder="CVC"
                      />
                      {errors.securityCode && (
                        <p className="text-red-500 text-xs mt-1">{errors.securityCode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span>${salesTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping}</span>
              </div>
              <div className="flex justify-between pt-2 border-t font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Add Confirm Payment Button */}
            <button 
              onClick={handlePayment}
              className={`w-full py-3 rounded-lg mt-6 font-medium transition-colors
                ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Validating...' : 'Confirm Payment'}
            </button>

            {/* Secure Checkout Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              SECURE SSL CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 