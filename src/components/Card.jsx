import React from 'react'
import { Link } from 'react-router-dom'

function Card({
    name = "Project Name",
    description = "Project Description",
    routeLinkName = "carousel1"
}) {

  return (
    <div className={` h-auto w-72  m-4 bottom-2 md:mb-2 md:gap-2 sm:overflow-auto rounded-[45px] border-1 hover:border-[#f1f1f1] duration-300 transition-all border-transparent  overflow-hidden `}>
          <Link to={`/${routeLinkName}`}>
          <div className=" bg-[#191a1d] p-8   rounded-md">
          <h2 className="text-white text-2xl font-medium leading-10 pb-2">
          {name}
          </h2>    
        <p className="text-white/50 text-lg leading-8  font-normal max-w-[470px]">
          {description}
        </p>
        <p className="mt-10 sm:mt-16 flex-row-reverse flex  text-sm font-sans antialiased font-light leading-relaxed  text-white/40">
                Learn more
              </p>
        </div>
          </Link>
    </div>
  )
}

export default Card