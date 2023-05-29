import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-gray-800">Password</label>
        <input
          type="password"
          id="password"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        >
          Login
        </button>
        <Link to="/register" className="text-gray-700 hover:text-gray-500 text-sm pl-4">
          Register New Account
        </Link>
      </div>
    </form>
  );
}
