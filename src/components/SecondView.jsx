import React from 'react';
import Card from './Card';

const SecondView = () => {
  
  return (
    <div className='mt-[10rem]'>
      <div className='speak px-10'>
<h2 className='text-[3rem] text-blue-700 font-medium'>speakers</h2>
<p className='text-[1.3rem] md:max-w-[40rem] text-[rgb(40,70,145)]'>Learn from the experts on the cutting-edge of deception at the most sinister companies.</p>
      </div>
      <div className="al flex ">
        
        <Card />

      </div>
   
    </div>
  );
}

export default SecondView;
