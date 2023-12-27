import React from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";


function Socialhandles() {
  return (
    <div className='w-40 border-[1px] rounded-lg border-[#292a2d] bg-[#2f3033] items-start font-Poppins text-sm  h-auto px-2 py-3 flex flex-col justify-evenly absolute top-5 left-2'>
        {/* <button ><IoMoonSharp className='w-8 h-8'/></button> */}
        {/* <button><img className='w-8 h-8' src="./Images/linkedin.png" alt="linkedin" /></button> */}
        {/* <button><img className='w-8 h-8' src="./Images/github.png" alt="github" /></button> */}
        <button className='p-1 flex space-x-3 items-center'><span className='mr-[2px]'>Region</span> <CiGlobe className='w-[18px] h-[18px]'/></button>
        <button className='p-1 flex space-x-4 items-center'><span>Github</span>
        <img className='w-4 h-4' src="./Images/linkedin.png" alt="linkedin" />
        </button>
        <button className='p-1 flex space-x-2 items-center'><span>LinkedIn</span>
        <img className='w-4 h-4' src="./Images/64427.png" alt="github" />
        
        
        </button>
    </div>
  )
}

export default Socialhandles