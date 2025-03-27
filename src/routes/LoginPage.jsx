import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-1x2 p-12 bg-white shadow-lg rounded-lg text-center">
        
        <h1 className="text-4xl font-bold text-green-900">Niner Mine</h1>

        <h2 className="text-3xl font-bold mt-4">Welcome Back!</h2>
        <p className="text-xl text-gray-700 mb-6">Please enter your email and password</p>

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
          </div>

          <div className="flex justify-between items-center text-lg text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-green-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-4 rounded-md text-xl font-bold hover:bg-green-900 transition"
          >
            Sign in
          </button>

          <p className="text-lg text-gray-700">
            Don't have an account?{" "}
            <a href="#" className="text-green-700 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
