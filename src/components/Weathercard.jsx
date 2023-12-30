import React from 'react'
import { MdMyLocation } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';


function Weathercard({ category }) {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('New Delhi');
  
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
    <div className='bg-[#292a2d] flex justify-between '>
      <h1 className='text-3xl py-2 px-3 text-white'>{category ? category : "Home"}</h1>
      <div className='bg-[#292a2d] flex border-[1px] p-2 items-center space-x-3 text-white rounded-xl w-48 h-16'>
        <img className='size-11' src={weather.current?.condition?.icon || './Images/default_weather.jpeg'} alt="" />
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