import React from "react"

const IngredientBanner = ({name,time}) => {
    
  return (
    <div>
    <div className="mt-10 flex max-w-full justify-between h-fit">
        <div className="w-1/2 flex flex-col gap-4">
        <div className="text-4xl flex-wrap font-bold flex items-center gap-2">{name} <span className="bg-[#51C452] text-white flex items-center gap-1 text-xs px-2 rounded">4.3<img src="/star.svg" alt="rating" className="w-2"/></span></div>
        <div className="text-[#A3A3A3]">Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</div>
        <div className="mt-8 flex items-center gap-4"><img src="/clock.svg" alt="time"/>{time}</div>
        </div>
        <div className="overflow-hidden w-1/2 h-72 -mr-4">
        <img src='/herbs.png' alt='banner' className="w-full h-full -mr-8 "/>
        </div>
    </div>
    </div>
  )
}

export default IngredientBanner