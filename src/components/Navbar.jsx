import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import newslogo from '/Images/newslogo.jpg'
import newslogo2 from '/Images/newslogo2.png' 
import linkedinlogo from '/Images/linkedin.jpeg'
import { IoSearchOutline } from "react-icons/io5";
import Socialhandles from "./Socialhandles"
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";



function Navbar({categories,changeThemeMode}) {
  const [input,setInput]=useState('')

  const [settingOn,setSetting]=useState(false)
  
  
  const handleSettingBtn=(e)=>{
    setSetting((prevSetting)=>!prevSetting) 
  }
  useEffect(() => {
    const e = document.getElementById('setting');
    const socialbox = document.getElementById('socialbox');
  
    if (e) {
      settingOn ? e.classList.add('-rotate-45') : e.classList.remove('-rotate-45');
    }
    
    if (settingOn && socialbox) {
      socialbox.classList.add('rotate-45');
    } else if (socialbox) {
      socialbox.classList.remove('rotate-45');
    }
  }, [settingOn]);
  

  // const categories=['','For You','India','World','Local','Business','Technology','Entertainment','Sports','Science']
  return (
    <div className='text-white bg-[#202124]'>
    <div className='navtop h-16 w-full p-2 flex '>
        <div className="navlogo w-1/4 flex items-center py-1 pl-7">
          {/* <img className='md:w-28 md:h-12 w-14 h-6 object-contain' src={newslogo2} alt="error" /> */}
          <span className='text-white font-Google text-3xl pt-2 text-center'>InfoPulse</span>
        </div>
        <div className="navsearch w-2/4 px-3 py-2  bg-[#3c4043] rounded-lg flex items-center font-normal">
        <span className='inline-block pl-2 text-[#888d91]'><IoSearchOutline /></span><input className='p-1 mx-6 w-[70%] bg-[#3c4043] outline-none' type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search for topics, locations & sources'/><button className='ml-16 p-1 font-normal text-[#888d91] hover:text-[#c8cfd4]'>Go</button>
        </div>
        <div className="navdarkmode w-1/4 flex justify-between py-1 px-4 items-center ">
            <div className='space-x-2 flex items-center'><span className='inline-block p-1'><IoHelpCircleOutline className='h-7 w-8 cursor-pointer ' />
                </span>
                
                <span id='setting' onClick={handleSettingBtn} className='inline-block p-1 relative cursor-pointer'><IoSettingsOutline className='h-6 w-7 cursor-pointer ' />
                 {
                  settingOn? <div id='socialbox' className=''><Socialhandles/></div>:''
                 }
                 
                </span>
                
            </div>
            <div className='flex items-center space-x-2'><span className='inline-block p-1'><IoMoonOutline onClick={()=>changeThemeMode()} className=' cursor-pointer h-7 w-8 '/>
                </span>
                
            </div>
       </div>
</div>

   <div className="navbottom w-full px-2 py-3 border-b-[1px] border-gray-300 mt-1 text-lg pl-4">
     <ul className='pl-5 no-underline flex  items-center justify-start space-x-16 lg:px-20x'>
        {
            categories.map((category,index)=>{
                return (<li className='hover:underline underline-offset-1 cursor-pointer text-white' key={index}><NavLink key={'/'+category} to={'/'+category}>{
                  category===''? 'Home': category
                }</NavLink></li>)
            })
        }
     </ul>
   </div>
    </div>
  )
}

export default Navbar