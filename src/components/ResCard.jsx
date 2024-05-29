import React from 'react'
import { Link } from 'react-router-dom'

const ResCard = ({card}) => {

  return (
    <div className='flex sm:justify-between flex-wrap-reverse justify-center gap-5 mb-10 border-b border-b-[#D6D6D6CE] pb-10'>
        <div className='flex flex-col gap-4 w-1/2'>
            <div className='flex text-xl items-center gap-4'>
                <div className='font-semibold'>{card.name}</div>
                <img src='/veg.svg' alt='veg-logo' className='w-4'/>
                <div className='bg-[#51C452] text-white text-xs flex items-center gap-1 px-1 rounded-sm'>{card.rating}
                <img src='/star.svg' alt='star-logo' className='w-2'/>
                </div>
            </div>
            <div className='flex items-center flex-wrap gap-10'>
                <div className='flex items-center gap-4'>
                    <div className='flex flex-col justify-center items-center'><img src='/fridge.svg' alt='equipments' className='w-6'/>Refrigerator</div>
                    <div className='flex flex-col justify-center items-center'><img src='/fridge.svg' alt='equipments' className='w-6'/>Refrigerator</div>
                </div>
                <div className='text-sm'>
                    <div className='font-semibold'>Ingredients</div>
                    <Link className='text-[#FF8800] text-xs' to={"/ingredients"}>View List &gt;</Link>
                </div>
            </div>
            <div>{card.description}</div>
        </div>
        <div className='relative'>
            <img src={card.image} alt='dish' className='min-w-56 h-40 rounded-xl'/>
            <div className='add-btn border-2 border-[#FF9A26] text-[#FF9A26] py-1 px-8 text-center absolute -bottom-4 bg-white left-[30%] rounded-md'>Add <span className='absolute right-1 -top-1'>+</span></div>
        </div>
    </div>
  )
}

export default ResCard