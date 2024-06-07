import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className = "text-sm text-gray-600 flex flex-wrap justify-center cursor-pointer hover:text-black"><span>&copy;Copyright&nbsp;</span>{currentYear},All rights reserved.&nbsp;Designed by&nbsp;<span className='underline'>Navgosoft</span>
      </p>
    </footer>
  );
};

export default Footer;