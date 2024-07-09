import React from 'react'

const PopUp = ({ openPopUp, closePopUp }: any) => {

  const handlelosePopUp = (e:any) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div 
        className='p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='relative w-[2480px] h-[3508px] justify-center items-center md:h-[40vh] md:w-full lg:h-[3508px] xl:h-[80vh] 2xl:h-[3508px] xsm:h-[60vh] xsm:w-full 2xsm:h-[60vh] 2xsm:w-full'>
          <h2
            className='font-semibold py-3 text-center text-xl'>
              Details
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PopUp