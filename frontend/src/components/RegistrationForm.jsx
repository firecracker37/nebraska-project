import React, { useState } from 'react';

export default function RegistrationForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordsMatch = password === confirmPassword;

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="text-gray-800">Name</label>
        <input
          type="text"
          id="name"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your name"
        />
      </div>
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
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="text-gray-800">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className={`block w-full border rounded px-3 py-2 mt-1 focus:outline-none ${
            passwordsMatch ? 'border-gray-400' : 'border-red-500'
          }`}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordsMatch && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      >
        Register
      </button>
    </form>
  );
}
