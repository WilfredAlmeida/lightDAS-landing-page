import React from 'react'
import './Hero.module.css'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div className="h-[80vh] bg-[#425066] flex justify-center items-center">
      
            <Navbar />

            <div>

        <div className='text-[4rem] text-wrap font-mono text-center text-[#FF7B15]'>
        Lightweight DAS for Solana
        </div>
        <div className='flex justify-center items-center gap-4 mt-5 font-serif'>
            <input className='p-4 py-2 rounded-md text-[1.4rem] w-[18rem] ' placeholder='wilfred@gmail.com'/>
            <button className='px-4 py-3 hover:bg-[#FF7B15] bg-slate-200 delay-75 text-gray-900 transition-all hover:text-white rounded-[8px]'>Join The WaitList Now!</button>
        </div>

         </div>
    </div>
  )
}

export default Hero