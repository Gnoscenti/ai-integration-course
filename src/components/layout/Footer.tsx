import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} AI Integration Course. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

