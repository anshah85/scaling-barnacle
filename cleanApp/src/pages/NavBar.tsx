import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">LA Wildfire Debris</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cleanup" className="hover:underline">
          Debris Cleanup
        </Link>
        <Link to="/prevention" className="hover:underline">
          Prevention
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
