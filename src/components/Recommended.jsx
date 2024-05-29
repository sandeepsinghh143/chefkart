import React from 'react'
import ResCard from './ResCard'

const Recommended = ({data}) => {
  return (
    <div>
        <div className='flex justify-between flex-wrap items-center mb-6'>
            <div className='text-3xl font-bold flex items-center gap-4'>Recommended
            <img src='/open.svg' alt='open-icon' className='w-4 mt-2'/>
            </div>
            <div className='bg-black text-white py-1 px-8 rounded-xl text-center'>Menu</div>
        </div>
        <div>
            {data && data.map((card)=><ResCard card={card}/>)}
            {data && data.map((card)=><ResCard card={card}/>)}
        </div>
    </div>
  )
}

export default Recommended