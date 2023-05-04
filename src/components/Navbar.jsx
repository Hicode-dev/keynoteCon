import React from 'react';

const Navbar = () => {
  return (
<div>
      <div class='flex justify-between p-7 border-b-2  px-10 items-center'>
  <div>
    <h3 className='text-[1.5rem] hidden lg:flex   font-bold'>DeceptiConf</h3>
  </div>
  <div className="date grid grid-cols-2 text-blue-500 text-[0.8rem] font-bold">
   <p>04-06 of April, 2022</p>
   <p>Los Angeles, CA</p>
  </div>
  <button className='px-4 py-4 h bg-blue-600 hidden lg:flex text-white  font-bold rounded-xl'>
    Get your ticket
  </button>
    </div>
</div>
  );
}

export default Navbar;

