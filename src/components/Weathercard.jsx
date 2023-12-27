import React from 'react'

function Weathercard() {
  return (
    <div className='bg-[#292a2d] flex justify-between'>
          <h1 className='text-3xl py-2 px-3 text-white'>Home</h1>
          <div className='bg-[#292a2d] flex border-[1px] p-2 items-center space-x-3 text-white border-red-500 rounded-xl w-48 h-16'>
          <img className='w-8 h-8' src="./Images/linkedin.png" alt="" />
          <div>
          <div className='flex text-nowrap items-center text-xs'>
            <span className=' mr-3'>Your local weather</span>
            <span className=''>i</span>
          </div>
          <span>19</span>
          </div>
    </div>
    </div>
  )
}

export default Weathercard