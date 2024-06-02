import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className = "text-sm text-gray-600 flex flex-wrap justify-center cursor-pointer hover:text-black"><span>&copy;</span> {currentYear},All Rights Reserved.Designed by Navgosoft.</p>
    </footer>
  );
};

export default Footer;