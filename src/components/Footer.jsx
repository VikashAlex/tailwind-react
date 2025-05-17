import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className='px-4 py-[90px] bg-[#2699fb]'>
            <div className='max-w-[1180px] mx-auto md:grid grid-cols-6  flex flex-wrap gap-15 justify-around '>
                <div className='col-span-2 text-center md:text-left'>
                    <div className='text-3xl  text-black font-bold mb-3'>Ws Cube Tech.</div>
                    <p className='text-white mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                    <div className='flex text-2xl gap-4 text-white py-4 justify-center md:justify-start'>
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaTwitterSquare />
                        <FaGithubSquare />
                    </div>
                </div>
                <div className='md:flex justify-end'>

                
                <ul className='text-white flex flex-col gap-4'>
                    <h3 className='text-black font-bold'>Solutions</h3>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
                </div>
                <div className='md:flex justify-end'>

                
                <ul className='text-white flex flex-col gap-4'>
                    <h3 className='text-black font-bold'>Support</h3>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
                </div>
                <div className='md:flex justify-end'>

                
                <ul className='text-white flex flex-col gap-4'>
                    <h3 className='text-black font-bold'>Company</h3>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Careers</li>
                </ul>
                </div>
                <div className='md:flex justify-end '>

                
                <ul className='text-white flex flex-col gap-4'>
                    <h3 className='text-black font-bold'>Legal</h3>
                    <li>Claim</li>
                    <li>Policy</li>
                    <li>Terms</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer