"use client"
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-3xl border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 z-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 " role="none">
            <a
              href="/#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
            >
              Name
            </a>
            <a
              href="/#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              Admin
            </a>
            <div className='flex justify-between'>
              <div>
              <a
              href="/#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
            >
              Active
            </a>
            </div>
            <div className='p-4'>
              <div className="flex py-1 px-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            </div>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-3"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
