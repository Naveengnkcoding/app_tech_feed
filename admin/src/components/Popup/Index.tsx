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
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm overflow-scroll-y'>
      <div 
        className='p-2 bg-white w-2/3 h-screen md:w-1/2 lg:h-screen shadow-inner border-e-emerald-600 py-5'>
        <div
          className='relative w-2/3 h-screen justify-center items-center md:h-[40vh] md:w-full lg:h-screen xl:h-[80vh] 2xl:h-[3508px] xsm:h-[60vh] xsm:w-full 2xsm:h-[60vh] 2xsm:w-full'>
          <h2
            className='font-semibold py-3 text-center text-xl'>
              Details
          </h2>
          <p className="pt-4 font-regular text-lg text-black text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ducimus quasi excepturi illum itaque repellat debitis, consequuntur laudantium quas vel totam iste est, maiores architecto doloremque ut. 
            Natus iure ad atque?
          </p>
        </div>
      </div>
    </div>
  )
}

export default PopUp