import React from 'react';

const Newsletter = () => {
  return (
    <div>
    <div className='md:mx-20 py-16 '>
  <div className='bg-slate-200 px-2 mx-auto rounded-3xl '>
<div className='flex flex-col  justify-center items-center'>
<div className='py-16'>
<h3 className='text-[3rem] font-medium text-[rgb(40,70,145)]'>   Stay Up To Date</h3>
<p className='text-[rgb(40,70,145)] py-4 font-semibold '>Get updates on all of our  events and be the first to get notified when tickets go <br /> on sale.</p>
<p className='text-[rgb(40,70,145)] py-4 pb-6 font-bold'>Sign Up For News Letter</p>
<div className='bg-white flex  rounded-2xl'>

              <input type="text" className='p-3 py-6 rounded-lg  outline-none w-3/4 ' /> 
              <button className=' bg-blue-600 px-5 py-3  font-bold 3xl text-white rounded-md ml-2'>suscribe</button>
          </div>
          </div>
 
</div>


  </div>
    </div>
  </div>
  );
}

export default Newsletter;
