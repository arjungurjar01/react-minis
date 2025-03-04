import React from 'react'
import { Link } from 'react-router-dom'

function Card({
    name = "Project Name",
    description = "Project Description",
    routeLinkName = "carousel1"
}) {

  return (
    <div className="h-60  w-72  m-2 bottom-2 md:mb-2 md:gap-2">
          <Link to={`/${routeLinkName}`}>
          <div className=" bg-[#191a1d] p-8 h-full w-full  rounded-[45px]">
          <h2 className="text-white text-2xl font-medium leading-10 pb-2 ">
          {name}
          </h2>    
        <p className="text-white/50 text-lg leading-8 py-2 h-30 font-normal max-w-[470px]">
          {description}
        </p>
        <p className="flex-row-reverse flex items-end  text-sm font-sans antialiased font-light leading-relaxed hover:text-[#f1f1f1]  text-white/40">
                Learn more
        </p>
        </div>
          </Link>
    </div>
  )
}

export default Card