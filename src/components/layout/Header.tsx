import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AI Integration Course</Link>
        <div>
               <Link to="/courses" className="mr-4 hover:text-gray-300">Courses</Link>
     
          <Link to="/login" className="mr-4 hover:text-gray-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

