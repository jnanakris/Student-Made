import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate =useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: usernameOrEmail,
        password,
      });
      if (response.data.message === "Login Successful"){
        alert("Login successful")
        localStorage.setItem('username', usernameOrEmail);
        setError("")

        setTimeout(() => {
          navigate('/');

        }, 1000);
      }

    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        
        <h1 className="text-4xl font-bold text-green-900">Niner Mine</h1>

        <h2 className="text-3xl font-bold mt-4">Welcome Back!</h2>
        <p className="text-xl text-gray-700 mb-6">Please enter your email and password</p>
        <h2 className="text-lg font-bold text-center mb-4">Sign In</h2>
        <p className="text-gray-600 text-center mb-4">Please enter your email and password</p>

        <form className="space-y-6">
          <div className="text-left">
            <label className="block text-xl font-medium text-gray-800">Email/Username</label>
            <input
              type="text"
              className="w-full px-5 py-4 border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email or username"
            />
          </div>

          <div className="text-left">
            <label className="block text-xl font-medium text-gray-800">Password</label>
            <input
              type="password"
              className="w-full px-5 py-4 border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your password"
            />
            <button
            type = "button"
            className = "absolute right-3 top-8 text-gray-500"
            onClick = {() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <div className="flex justify-between items-center text-lg text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to ="/forgotPassword" className="text-green-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-4 rounded-md text-xl font-bold hover:bg-green-900 transition"
          >
            Sign in
          </button>

          <p className="text-lg text-gray-700">
            Don't have an account?{" "}
            <Link to ="/signup" className="text-green-700 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
