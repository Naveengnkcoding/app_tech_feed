// pages/index.js
import { useState } from 'react';
import Popup from './Index';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <div className="flex items-center justify-center">
      <button
        className="px-4 py-2 bg-red-600 rounded-lg text-white border-none outline-none focus:border-none focus:outline-none"
        onClick={openPopup}
      >
        View
      </button>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Home;
