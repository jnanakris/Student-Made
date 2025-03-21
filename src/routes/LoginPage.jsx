import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">

        <div className="flex items-center space-x-2 mb-6">
          <h1 className="text-xl font-semibold text-green-900">Niner Mine</h1>
        </div>

        <h2 className="text-lg font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-gray-600 text-center mb-4">Please enter your email and password</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email/Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email or username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
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
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600">
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
