import React from 'react'

const DateTime = () => {
    const date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    let startHour = date.getHours()>12?date.getHours()-12: date.getHours();
    let minutes = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
    let endHour = date.getHours()+2>12?date.getHours()+2-12: date.getHours()+2;
    let startMer = date.getHours()<11? "AM":"PM";
    let endMer = date.getHours()+2<11? "AM":"PM"
  return (
    <div className='flex justify-between items-center w-[90%] mx-auto -mt-10 bg-white p-8 date-time rounded-xl'>
        <div className='flex items-center gap-2 font-bold border-r border-r-[#D6D6D6CE] w-1/2'>
            <img src='/calender.svg' alt='date-icon'/>
            <div>{date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear()}</div>
        </div>
        <div className='flex items-center gap-2 font-bold'>
            <img src='/clock.svg' alt='time-icon'/>
            <div>{startHour+":"+minutes+" "+startMer+" - "+endHour+":"+minutes+" "+endMer}</div>
        </div>
    </div>
  )
}

export default DateTime