import React, { useState } from 'react'
import newslogo from '/Images/newslogo.jpg'
import linkedinlogo from '/Images/linkedin.jpeg'
import { IoSearchOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";



function Navbar(props) {
  const [input,setInput]=useState('')
  const categories=['Home','For You','India','World','Local','Business','Technology','Entertainment','Sports','Science']
  return (
    <>
    <div className='navtop h-16 w-full p-2 flex bg-slate-50'>
        <div className="navlogo w-1/4 flex items-center py-1 pl-7">
          <img className='md:w-28 md:h-12 w-14 h-6 object-contain' src={newslogo} alt="error" />
        </div>
        <div className="navsearch w-2/4 px-3 py-2  bg-slate-200 rounded-lg flex items-center font-normal">
        <span className='inline-block pl-2'><IoSearchOutline /></span><input className='p-1 mx-6 w-[70%] bg-slate-200 outline-none' type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search for topics, locations & sources'/><button className='ml-16 p-1 font-normal text-gray-500'>Go</button>
        </div>
        <div className="navdarkmode w-1/4 flex justify-between py-1 px-4 items-center ">
            <div className='space-x-2 flex items-center'><span className='inline-block p-1'><IoHelpCircleOutline className='h-7 w-8 cursor-pointer ' />
                </span>
                <span className='inline-block p-1'><IoSettingsOutline className='h-6 w-7 cursor-pointer ' />
                </span>
            </div>
            <div className='flex items-center space-x-2 pr-2'><span className='inline-block p-1'><IoMoonOutline onClick={()=>props.changeThemeMode()} className=' cursor-pointer h-7 w-8 '/>
                </span>
                <span className='h-[33px] w-9'><a href=""><img className='h-full w-full' src={linkedinlogo}/></a>
                </span>
            </div>
       </div>
</div>

   <div className="navbottom w-full px-2 py-3 border-b-[1px] border-gray-300 mt-1">
     <ul className='pl-5 no-underline flex justify-start items-center space-x-11'>
        {
            categories.map((category,index)=>{
                return (<li className='hover:underline underline-offset-1 cursor-pointer' key={index}><a href="">{category}</a></li>)
            })
        }
     </ul>
   </div>
    </>
  )
}

export default Navbar