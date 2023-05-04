import React from 'react'
import Card2 from './Card2'

const ThirdView = () => {
  return (
    <div>
          <div className='mt-[10rem]'>
      <div className='speak md:px-10 px-6'>
<h2 className='md:text-[3rem] md:max-w-[53rem] text-[1.9rem] text-blue-700 font-medium'>Our three day schedule is jam-packed  with brilliant, creative, evil geniuses </h2>
<p className='text-[1.rem] md:text-[1.4rem] text-[rgb(40,70,145)]'>The worst people in our industry giving the best talks you’ve ever seen. <br /> Nothing will be recorded and every attendee has to sign an NDA to watch <br /> the talks</p>
      </div>
      <div className="al flex ">
     <Card2 />
      </div>
    </div>
    </div>
  )
}

export default ThirdView
