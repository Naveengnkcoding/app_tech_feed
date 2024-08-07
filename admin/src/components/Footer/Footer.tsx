import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Link href="#">
      <p className = "text-sm text-gray-600 flex flex-wrap justify-center cursor-pointer"><span>&copy;&nbsp;Copyright</span>&nbsp;{currentYear},All rights reserved,<span className='font-bold'>Navgosoft</span>
      </p>
      </Link>
    </footer>
  );
};

export default Footer;