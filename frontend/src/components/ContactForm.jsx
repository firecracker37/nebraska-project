import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  // Use state variables to store the user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Define a function to handle the form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Send the user input to an API endpoint or a backend service
      // You can use fetch, axios, or any other library to make the request
      // For example:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ name, email, message }),
      // });
      // const data = await res.json();
      // Check the response status and show a success or error message
      // For example:
      // if (data.success) {
      //   toast.success('Your message has been sent!');
      // } else {
      //   toast.error(data.message || 'Something went wrong!');
      // }
    } catch (err) {
      toast.error(err.message || 'Something went wrong!');
    }
  };

  return (
    <form className="space-y-4" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name" className="text-gray-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          className="block w-full border border-gray-400 rounded px-3 py-2 mt-1 focus:outline-none focus:border-gray-500"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex justify-end items-center">
        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        >
          Send
        </button>
      </div>
    </form>
  );
}
