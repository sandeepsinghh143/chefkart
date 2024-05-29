import React from 'react'

const Appliances = () => {
  return (
    <div className='flex items-center py-10 gap-20 flex-wrap'>
        <div className='bg-[#F5F5F5] p-8 rounded-xl'>
            <img src='/fridge.svg' alt='appliance' className='w-20'/>
            <div className='mt-4 text-xl'>Refrigerator</div>
        </div>
        <div className='bg-[#F5F5F5] p-8 rounded-xl'>
            <img src='/fridge.svg' alt='appliance'  className='w-20'/>
            <div className='mt-4 text-xl'>Refrigerator</div>
        </div>
        <div className='bg-[#F5F5F5] p-8 rounded-xl'>
           <img src='/fridge.svg' alt='appliance'  className='w-20'/>
           <div className='mt-4 text-xl'>Refrigerator</div>
        </div>
    </div>
  )
}

export default Appliances