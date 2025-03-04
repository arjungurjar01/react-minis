import React from 'react'
import { accordionData } from './data'
import Accordion from './Accordion'

const AccordionMenu = () =>{
    return (
        <div className=' bg-[#f1f1f1] rounded-md w-100 h-120 overflow-auto no-scrollbar '>
        <h1 className='bg-[#1f1f1f] rounded-t-md text-white text-center w-100  py-2'>Accordion Menu</h1>
        <div className='px-4'>
        {accordionData.map(({title,content})=>(
               <Accordion title={title} content={content}/>
        )) }
        </div>
    </div>
    )
}

function AccordionPage() {
  return (
    <div className='flex justify-center pt-10'>
          <AccordionMenu/>
    </div>
  )
}

export default AccordionPage ;