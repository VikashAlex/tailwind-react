import React from 'react'
import img01 from '../assets/01.png'
import img02 from '../assets/02.png'
import img03 from '../assets/03.png'

function Card() {
  return (
    <div className='p-4 md:py-[100px]'>
        <div className='max-w-[1180px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='py-5 duration-300 hover:scale-[1.04] shadow-2xl rounded flex flex-col gap-5 items-center px-10 text-center font-bold md:mt-0 mt-10'>
                <div className='flex justify-center'><img src={img01} alt="" width={"30%"} /></div>
                <h2 className='text-3xl'>Web development</h2>
                <h3 className='text-3xl'>$149</h3>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dummy text of the printing</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dumm.</p>
                <div>
                    <button className='bg-[#00df9a] px-12 py-3 rounded text-[15px]' >Start Trial</button>
                </div>
            </div> 
              <div className='py-5 duration-300 hover:scale-[1.04] bg-gray-100 rounded shadow-2xl  flex flex-col gap-5 items-center px-10 text-center font-bold md:mt-0 mt-10 '>
                <div className='flex justify-center'><img src={img02} alt="" width={"30%"} /></div>
                <h2 className='text-3xl'>Digital Marketing</h2>
                <h3 className='text-3xl'>$139</h3>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dummy text of the printing</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dumm.</p>
                <div>
                    <button className='text-[#00df9a] bg-black px-12 py-3 rounded text-[15px]' >Start Trial</button>
                </div>
            </div>
            
             <div className='py-5 duration-300 hover:scale-[1.04] shadow-2xl rounded flex flex-col gap-5 items-center px-10 text-center font-bold md:mt-0 mt-10'>
                <div className='flex justify-center'><img src={img03} alt="" width={"30%"} /></div>
                <h2 className='text-3xl'>App Development</h2>
                <h3 className='text-3xl'>$149</h3>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dummy text of the printing</p>
                <p className=' border-b-1 pb-2 border-slate-200'>Lorem Ipsum is simply dumm.</p>
                <div>
                    <button className='bg-[#00df9a] px-12 py-3 rounded text-[15px]' >Start Trial</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Card