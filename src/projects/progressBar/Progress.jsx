import React from 'react'

function Progress({progress,color}) {

    const progressColor = {
        backgroundColor: color,
        width: `${progress}%`,
        height: '20px',
        
    }
  return (
    <div className='border overflow-hidden rounded-md w-md  '>
        <div style={progressColor} className='flex justify-end text-white items-center'>
             {`${progress}%`}
        </div>
    </div>
  )
}

export default Progress