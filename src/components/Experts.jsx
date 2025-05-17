import React from 'react'
import laptop from '../assets/laptop.jpg'

function Experts() {
    return (
        <div className='p-4'>
            <div className='max-w-[1180px] mx-auto py-15 md:grid grid-cols-2 gap-8'>
                <div className='col-span-1 flex md:justify-start justify-center items-center'>
                    <img src={laptop} alt="" width={"90%"} />
                </div>
                <div className='col-span-1 flex justify-center flex-col md:text-left text-center'>
                    <h1 className='text-[#00DF9A] font-bold text-2xl mb-3'>LEARN FROM EXPERTS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?</p>
                    <div>
                        <button className='px-15 py-3  rounded text-white cursor-pointer mt-7 text-1xl bg-black'>Get Start</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experts