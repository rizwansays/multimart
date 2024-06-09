import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval;
  const countDown = ()=>{
    const destination = new Date('Oct 05, 2024').getTime()

    interval = setInterval(()=>{
             
      const now = new Date().getTime()
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) /
       (1000 * 60 * 60)) 
       const minutes = Math.floor(different % (1000 * 60 * 60 ) /
       (1000 * 60 ))
    const seconds = Math.floor(different % (1000 * 60) / 1000)

    if(destination < 0){
      clearInterval(interval.current)
    }else{
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }
    })
  }

  useEffect(()=>{
    countDown()
  })
  return (
    <div className='clock_wrapper flex items-center gap-3 mb-4'>

      <div className='clock_data text-white flex items-center gap-3'>
        <div className="text-center">
          <h1 className='text-lg'>{days}</h1>
          <h5 className='text-lg'>Days</h5>
        </div>
        <span className='text-lg'>:</span>
      </div>
      
      <div className='clock_data text-white flex items-center gap-3'>
        <div className="text-center">
          <h1 className='text-lg'>{hours}</h1>
          <h5 className='text-lg'>Hours</h5>
        </div>
        <span className='text-lg'>:</span>
      </div>
      <div className='clock_data text-white flex items-center gap-3'>
        <div className="text-center">
          <h1 className='text-lg'>{minutes}</h1>
          <h5 className='text-lg'>Minutes</h5>
        </div>
        <span className='text-lg'>:</span>
      </div>
      <div className='clock_data text-white flex items-center gap-3'>
        <div className="text-center">
          <h1 className='text-lg'>{seconds}</h1>
          <h5 className='text-lg'>Sec</h5>
        </div>
      </div>

    </div>
  )
}
