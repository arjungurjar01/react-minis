import React, { useState } from 'react'

function Accordion({title,content}) {
    const [isActive,setIsActive] = useState(false);

  return (
    <div className='pt-2 '>
        <div className='flex justify-between items-center cursor-pointer' onClick={()=>setIsActive(!isActive)}>
        <div className='text-base font-medium' >
            {title}
        </div>
        <div className='text-xl font-medium'>
        { isActive ? '-' : '+'}
        </div>
        </div>
        <div>
            {isActive && <p  className='mt-2 text-sm font-normal bg-amber-50 p-2'>{content}</p>}
        </div>
    </div>
  )
}

export default Accordion