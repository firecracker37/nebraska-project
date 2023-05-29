import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex justify-between items-center px-4 py-2 bg-red-500">
      <div className="flex flex-col md:flex-row">
        <div className="relative">
          <Link to="/"><h1 className="brand-text">Nebraska:</h1></Link>
          <h3 className="absolute bottom-4 right-3 transform translate-x-2/3 translate-y-2/3 -rotate-12 text-sm font-semibold text-gray-700">
            Then &amp; Now
          </h3>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-2xl text-white" />
        </button>
      </div>
      <nav className="hidden md:flex md:ml-4">
        <Link
          to="/"
          className="mr-4 text-white hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="/locations"
          className="mr-4 text-white hover:text-gray-300"
        >
          Locations
        </Link>
        <Link
          to="/events"
          className="mr-4 text-white hover:text-gray-300"
        >
          Events
        </Link>
        <Link
          to="/people"
          className="mr-4 text-white hover:text-gray-300"
        >
          People
        </Link>
        <Link
          to="/contact"
          className="mr-4 text-white hover:text-gray-300"
        >
          Contact
        </Link>
        <Link
          to="/Login"
          className="mr-4 text-white hover:text-gray-300"
        >
          Login
        </Link>
      </nav>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full w-full bg-red-500 z-20 right-0`}
      >
        <Link
          to="/"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/locations"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          Locations
        </Link>
        <Link
          to="/events"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          Events
        </Link>
        <Link
          to="/people"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          People
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="block py-2 px-4 text-white hover:bg-red-700"
          onClick={toggleMenu}
        >
          Login
        </Link>
      </div>
    </header>
  );
}
