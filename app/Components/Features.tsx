"use client"
import React from 'react'
import Image from 'next/image'
import { featuresList } from '../utils/Data/features'
const Features = () => {
  return (
    <div id="features" className='transition-all mt-[7vh] shadow-inner py-[15px] flex flex-col items-center justify-center flex-wrap'>
        
        <h1 className='text-[2.8rem] mt-[3vh] font-anta text-white'>Features</h1>
      
        <div className="mb-14 grid grid-cols-1 mt-[7vh] md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-center">
 { featuresList.map((feature, index) => (
    <div key={index} className="w-full md:w-auto xl:w-auto bg-[#121212B2] border-[#2A2427] border-solid border shadow-spotlight transition-transform duration-300 hover:scale-110 h-full rounded-lg flex flex-col p-8 justify-center items-center">
      <Image alt="features" src={feature.icon} width={48} height={48} className="w-[50vw] md:w-[32vw] xl:w-[30vw]" />
      {/* Additional content here */}
    </div>
  ))}
</div>
    </div>
  )
}

export default Features