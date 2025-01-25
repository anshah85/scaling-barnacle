import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-yellow-500 p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-white hover:text-yellow-200 font-bold">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-yellow-200 font-bold">About</Link></li>
        <li><Link to="/action" className="text-white hover:text-yellow-200 font-bold">Action</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
