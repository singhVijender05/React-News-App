import React from 'react'

function Card() {
    return (
        <div className="mt-8 maincard bg-[#1f1f1f] text-white h-[350px] flex justify-between w-full space-x-1 p-2 border-t-[1px] border-t-[#1f1f1f] rounded-t-lg border-b-[1px] border-b-white">
        <div className='card p-1  rounded-lg overflow-hidden  w-72 h-[330px] '>
            <img className='w-full h-[50%] rounded-lg ' src="/Images/sidimage.jpg" alt="" />
            <div className="cardcontent mt-2 p-2  h-[45%] flex flex-col justify-between  space-y-2">
                <img src="/Images/newslogo.jpg" className='h-4 w-12' alt="" />
                <div className="textcontent h-20">
                    <p className='text-xl font-normal leading-6 line-clamp-3'>
                        'Crude mockery': BJP after CM
                        Siddaramaiah takes luxury jet
                        to seek drought fund
                    </p>
                </div>

                <span className='text-sm'>3 hours ago</span>
            </div>
        </div>
        <div className="relatednews px-3 py-4 space-y-3">
            <div>
                <img src="./Images/newslogo.jpg" className='h-4 w-12' alt="" />
                <p className='leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.</p>
                <span className='text-sm'>4 hours ago</span>
            </div>
            <div>
                <img src="./Images/newslogo.jpg" className='h-4 w-12' alt="" />
                <p className='leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.</p>
                <span className='text-sm'>4 hours ago</span>
            </div>
            <div>
                <img src="./Images/newslogo.jpg" className='h-4 w-12' alt="" />
                <p className='leading-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aliquid.</p>
                <span className='text-sm'>4 hours ago</span>
            </div>
           
        </div>
        </div>
    )
}

export default Card