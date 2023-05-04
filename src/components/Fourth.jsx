import React from 'react'
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import { RiFileCopy2Line } from 'react-icons/ri'
import { TiFlowParallel } from 'react-icons/ti'
import { GiMountainCave } from 'react-icons/gi'
import { SlSocialDropbox } from 'react-icons/sl'
const Fourth = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-16'>
            <div className=''>
                <h1 className='  text-[2.4rem] md:text-[3rem] px-4 md:px-0 text-center md:max-w-[46rem] text-[rgb(37,99,235)] font-bold pt-14'>Current sponsorships for our  workshops and speakers..</h1>
                {/* <h1 className='text-[3rem] text-[rgb(37,99,235)] font-bold -mt-4'>  </h1> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-content-between place-items-center mt-16">
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <HiOutlineCubeTransparent /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'> Transistor</h3>
                </div>
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <RiFileCopy2Line /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'> Tuple</h3>
                </div>
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <TiFlowParallel /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'>StaticKit</h3>
                </div>
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <GiMountainCave /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'> mirage</h3>
                </div>
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <SlSocialDropbox /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'> Laravel</h3>
                </div>
                <div className="speaker flex items-center justify-between">
                    <h3 className='text-[4.6rem] font-bold text-slate-500'> <HiOutlineCubeTransparent /> </h3>
                    <h3 className='text-[1.3rem] font-bold text-slate-500'>Statamic</h3>
                </div>


            </div>
        </div>
    )
}

export default Fourth