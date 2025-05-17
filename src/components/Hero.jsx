import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className=' md:py-[120px]  py-6 bg-[#2699fb]'>
        <div className='max-w-[1180px] mx-auto  font-bold text-center'>
            <div className='text-black md:text-4xl text-1xl mb-6'>Learn with us</div>
            <div className='text-white md:text-7xl text-3xl mb-6'>Grow with us.</div>
            <div className='text-white md:text-5xl text-2xl mb-6'>Learn 
                <ReactTyped strings={["Web development","Ethical hacking","App development"]} 
                typeSpeed={130}
                backDelay={100}
                loop={true}
                className='pl-3'
                />
            </div>
            <button className='px-15 py-3 rounded text-white cursor-pointer mt-7 text-1xl bg-black'>Get Start</button>
        </div>
    </div>
  )
}

export default Hero