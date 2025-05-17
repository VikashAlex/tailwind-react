import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
function Header() {
  const [active , setActive]=useState(false)
  
  return (
    <header className='p-4 bg-[#2699fb]'>
      <nav className='max-w-[1180px] flex items-center justify-between py-[15px] mx-auto '>
        <div className='text-3xl  text-black font-bold'>WsCube Tech.</div>
        <ul className='hidden md:flex gap-10 text-white cursor-pointer '>
          <li>Home</li>
          <li>Company</li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {
          !active
          ?
          <AiOutlineMenu className="text-white text-3xl md:hidden block" onClick={()=>{setActive(!active)}}/>
          :
          <AiOutlineClose className="text-white text-3xl md:hidden block" onClick={()=>{setActive(!active)}} />

        }
        {/* responsive bar */}
        <ul className={`md:hidden block fixed top-[92px] duration-500 bg-black w-full h-screen gap-10 text-white cursor-pointer ${active?"left-0":"left-[-100%]"}`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resource</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header