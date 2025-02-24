import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='w-16 md:w-52 lg:w-64 xl:w-80 h-screen p-4 bg-[#191a1d] text-white '>
          <div className='flex flex-col gap-2'>
          <div className='p-5 bg-[#f1f1f1] text-[#191a1d] rounded-md'>
           <Link to={'/carousel1'}>  <p className='cursor-pointer font-medium'>Carousel 1</p> </Link>
          </div>
          <div className='p-5 bg-[#f1f1f1] text-[#191a1d] rounded-md'>
            Carousel 2
          </div>
          </div>
    </div>
  )
}

export default SideBar ;