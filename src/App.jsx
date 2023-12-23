import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
function App() {
  const [darkMode,setDarkMode]=useState(0)
  const changeThemeMode=()=>{
    darkMode===0? setDarkMode(1):setDarkMode(0);
  }
  const apiKey="e01a7b4366cf4dfdae4a3ab1f752c360"
  const categories=['','Home','For You','India','World','Local','Business','Technology','Entertainment','Sports','Science']
  return (
      <div className='relative bg-[#292a2d]'>
         <Navbar apiKey={apiKey} changeThemeMode={changeThemeMode} className="absolute top-0"/>
         {console.log("darkMode :"+darkMode)}
         
         <News/>
         <Routes>
          {
            
         categories.map((category,index)=>{
          return (<Route key={index} path={`/${category}`} element={<News/>}/>)
         })
        }
         </Routes>
      </div>

  )
}


export default App
