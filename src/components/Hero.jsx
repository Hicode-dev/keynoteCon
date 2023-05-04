  import React from 'react'

  const Hero = () => {
    return (
      <div className='flex justify-center px-6 md:px-0 items-center flex-col pt-16'>
  <div className=''>
<h1 className='text-[2.6rem] md:text-[4.3rem] text-[rgb(37,99,235)] font-bold pt-14'>A design conference</h1>
      <h1 className='text-[2.6rem] md:text-[4.3rem] text-[rgb(37,99,235)] font-bold -mt-4 md:-mt-10'>  for the dark side.</h1>
</div>
        <div className=' max-w-[44rem] pt-8'>
        <p className='text-[1.2rem]  md:px-0 md:text-[1.4rem] text-[rgb(40,70,145)]'>The next generation of web users are tech-savvy and suspicious. They know how to use dev tools, they can detect a phishing scam from a mile away, and they certainly aren’t accepting any checks from Western Union.</p>
      <p className='text-[1.2rem]  md:px-0 md:text-[1.4rem] text-[rgb(40,70,145)]' >At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.</p>
      <button className='px-4 py-4 w-full mt-8  bg-blue-600 text-white block md:hidden  font-bold rounded-xl'>
    Get your ticket
  </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:place-content-between md:place-items-center mt-16">
<div className="speaker ">
    <p className='text-blue-600 capitalize'>speakers</p>
    <h3 className='text-[1.2rem] md:text-[1.6rem] font-bold text-blue-700'> 18</h3>
</div>
<div className="speaker">
    <p className='text-blue-600 capitalize'>people attending </p>
    <h3 className='text-[1.2rem] md:text-[1.6rem] font-bold text-blue-700'>  2,091</h3>
</div>
<div className="speaker"> 
    <p className='text-blue-600 capitalize'>venue</p>
    <h3 className='text-[1.2rem] md:text-[1.6rem] font-bold text-blue-700'>  Staples Center
</h3>
</div>
<div className="speaker">
    <p className='text-blue-600 capitalize'>location</p>
    <h3 className='text-[1.2rem] md:text-[1.6rem] font-bold text-blue-700'>  Los Angeles</h3>
</div>
        </div>
    </div>
    
  )
}

export default Hero
