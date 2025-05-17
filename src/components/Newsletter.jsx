import React from 'react'

function Newsletter() {
  return (
    <div className='p-4 bg-[#2699fb]'>
      <div className='py-15 max-w-[1180px] mx-auto md:flex justify-between items-center'>
        <div className='md:text-left text-center'>
          <h1 className='text-white text-4xl mb-3 font-bold'>Want to learn latest I.T skills?</h1>
          <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
        </div>
        <div className='md:text-left text-center'>
          <input type="text" placeholder='Enter Email' className='bg-amber-50 md:w-[70%] px-3 h-[40px] rounded active:outline-1 outline-pink-400' />
          <button className='px-3 h-[41px] ms-3  rounded text-white cursor-pointer mt-7 text-1xl bg-black'>Notify Me</button>
          <p className='text-white mt-3'>We care bout the protection of your data. Read our <br /> <a href="#" className='text-black'>Privacy Policy.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
