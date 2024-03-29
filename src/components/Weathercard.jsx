import React from 'react'
import { MdMyLocation } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Weathercard({ category,customQuery ,darkMode}) {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('Bangalore');
  
  const setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      setCity(latitude + ',' + longitude)
    })
  }

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=cd8345a2878c48679d271435231607&q=${city}&aqi=no`)
      response.data && setWeather(response.data)
    }
    fetchWeather()
  }, [city])


  return (
    <div className={`${darkMode? 'bg-[#292a2d]': 'bg-[#fafafa]'}  flex justify-between `}>
      <h1 className={`text-3xl py-2 px-3 ${darkMode? `text-white`: 'text-black'}`}>{category ? (category=='customQuery'? `'${customQuery}'`:category) : "Home"}</h1>
      <div className={`${darkMode? 'bg-[#292a2d] text-white': 'bg-[#F5F5F5] text-black border-gray-700'} flex border-[1px] p-2 items-center space-x-3  rounded-xl w-48 h-16`}>
        <img className={`size-11 ${darkMode? '':'' }`} src={weather.current?.condition?.icon || './Images/default_weather.jpeg'} alt="" />
        <div>
          <div className='flex text-nowrap items-center'>
            <span className='mr-2 text-xs'>{weather?.location?.name || "Your local weather"}</span>
            <button className='text-sm' onClick={setCurrentLocation}>
              <MdMyLocation />
            </button>
          </div>
          <span className='text-lg'>
            {
              weather.current!=null && weather.current.temp_c + '°C'
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default Weathercard