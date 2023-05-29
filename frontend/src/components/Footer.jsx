import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-wrap space-x-4">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/locations" className="footer-link">
            Locations
          </Link>
          <Link to="/events" className="footer-link">
            Events
          </Link>
          <Link to="/people" className="footer-link">
            People
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <FaTwitter className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaFacebook className="footer-icon" />
          <FaYoutube className="footer-icon" />
        </div>
      </div>
    </footer>
  );
}
