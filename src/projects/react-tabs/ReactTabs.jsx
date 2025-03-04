import React from 'react'
import Tabs from './Tabs';

function ReactTabs() {
    const tablist = [{
        "id":1,
        "label":"Home",
        "content":"Home content"

    },
    {
        "id":2,
        "label":"About",
        "content":"About content"
        
    },
    {
        "id":3,
        "label":"Setting",
        "content":"Setting content"
        
    }]

  return (
    <div className=' pt-10 flex flex-col items-center justify-center'>
        <div className='shadow-gray-500 shadow-sm rounded-md'>
        <h1 className='bg-[#1f1f1f] rounded-t-md text-white w-100 px-4 text-center py-2'>React Tabs</h1>
        <Tabs tabs={tablist} > </Tabs>
        </div>
    </div>
  )
}

export default ReactTabs ;