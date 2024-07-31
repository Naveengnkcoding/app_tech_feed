'use client'

import { useState, useRef, useEffect } from 'react'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-lg">
      <div 
        ref={popupRef}
        className="bg-white w-full max-w-4xl p-6 rounded shadow-lg"
      >
        <div className="relative w-full aspect-[1/1.414]">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
            <div className="w-full h-full overflow-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup