import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjusted path

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to log out", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md font-sans">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-xl font-headings font-bold hover:text-blue-200 transition-colors">
          AI Course Platform
        </NavLink>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            `hover:text-blue-200 transition-colors ${isActive ? 'font-headings font-bold text-blue-100' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => 
            `hover:text-blue-200 transition-colors ${isActive ? 'font-headings font-bold text-blue-100' : ''}`
          }>
            Courses
          </NavLink>
          {currentUser && (
            <NavLink to="/recap" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors ${isActive ? 'font-headings font-bold text-blue-100' : ''}`
            }>
              Recaps
            </NavLink>
          )}
          {currentUser ? (
            <button 
              onClick={handleLogout} 
              className="hover:text-blue-200 transition-colors font-headings"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => 
                `hover:text-blue-200 transition-colors ${isActive ? 'font-headings font-bold text-blue-100' : ''}`
              }>
                Login
              </NavLink>
              <NavLink to="/signup" className={({ isActive }) => 
                `hover:text-blue-200 transition-colors ${isActive ? 'font-headings font-bold text-blue-100' : ''}`
              }>
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center font-sans">
        <p>&copy; {new Date().getFullYear()} AI Integration Course. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

