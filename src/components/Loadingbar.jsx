import React from 'react'
import {ColorRing} from 'react-loader-spinner'
function Loadingbar({loading}) {
  return (
    <div className={'flex justify-center pt-4 '+ (loading? 'bg-[#292a2d] h-screen': 'bg-[#1f1f1f] h-min')}>

        <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
}

export default Loadingbar