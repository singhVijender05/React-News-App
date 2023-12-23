import React from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

function SocialHandles() {
  return (
    <div className='w-48 h-72 p-2 flex flex-col justify-evenly'>
        <button><IoMoonSharp/></button>
        <button><img className='w-32' src="./Images/linkedin.png" alt="linkedin" /></button>
        <button><img className='w-32' src="./Images/github.png" alt="github" /></button>
    </div>
  )
}

export default SocialHandles