import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [darkMode,setDarkMode]=useState(0)
  const changeThemeMode=()=>{
    darkMode===0? setDarkMode(1):setDarkMode(0);
  }
  const apiKey="e01a7b4366cf4dfdae4a3ab1f752c360"
  return (
      <div className='relative'>
         <Navbar apiKey={apiKey} changeThemeMode={changeThemeMode} className="absolute top-0"/>
         {console.log("darkMode :"+darkMode)}
      </div>

  )
}

export default App
