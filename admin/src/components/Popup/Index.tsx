import React from 'react';
import Individual from './Individual';

const PopUp = ({ openPopUp, closePopUp }:any) => {

  const handleClosePopUp = (e:any) => {
    console.log('Clicked:', e.target.id);  // Debugging line to ensure the click event is captured
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (!openPopUp) return null;

  return (
    <div
      id='ModelContainer'
      onClick={handleClosePopUp}
      className='fixed z-[1000] inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm overflow-y-scroll'>
      <div>
        <Individual />
      </div>
    </div>
  )
}

export default PopUp;
