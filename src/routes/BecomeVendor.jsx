import React from "react";

const BecomeVendor = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Become a Vendor</h1>
      <p className="mb-4">Want to sell your handmade items? All you need is a valid UNC Charlotte email.</p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your UNCC email"
          className="border p-2 w-full rounded"
          required
        />
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
          >
            Sign up
          </button>

      </form>
    </div>
  );
};

export default BecomeVendor;