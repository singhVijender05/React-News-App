import React from 'react'
;
import { CiGlobe } from "react-icons/ci";


function Socialhandles() {
  return (
    <div className='w-40 border-[1px] rounded-lg border-[#292a2d] font-Poppins text-sm  h-auto px-2 py-3 flex flex-col justify-evenly absolute top-8 left-3 bg-[#202124]'>
        {/* <button ><IoMoonSharp className='w-8 h-8'/></button> */}
        {/* <button><img className='w-8 h-8' src="./Images/linkedin.png" alt="linkedin" /></button> */}
        {/* <button><img className='w-8 h-8' src="./Images/github.png" alt="github" /></button> */}
      <button className='p-1 flex justify-between items-center'><span className='mr-[2px]'>Region</span> <CiGlobe className='w-[20px] h-[20px]'/></button>
        <a target='_blank' href='https://github.com/singhVijender05/React-News-App' className='p-1 flex justify-between items-center'><span>Github</span>
       
        <img className='w-4 h-4' src="./Images/64427.png" alt="github" />
        </a>
        <a target='_blank' href='https://linkedin.com/in/vijender-singh-794995230' className='p-1 flex justify-between items-center'><span>LinkedIn</span>
        <img className='w-4 h-4' src="./Images/linkedin.png" alt="linkedin" />
        
        
        </a>
    </div>
  )
}

export default Socialhandles