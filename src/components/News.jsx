import React from 'react'
import Card from './Card'
import Weathercard from './Weathercard'

function News() {
  return (
<div className='mx-auto w-[70%] mt-5'>
    <Weathercard/>
    <div className='mt-4 border-t-[1px] bg-[#1f1f1f] border-[#1f1f1f] rounded-t-lg p-4 '>
      <Card/> 
      <Card/> 
      <Card/> 
      <Card/> 
      <Card/> 
    </div>
    </div>
  )
}

export default News