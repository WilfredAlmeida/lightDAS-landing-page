"use client"
import React from 'react'
import Image from 'next/image'
import { featuresList } from '../utils/Data/features'
const Features = () => {
  return (
    <div id="features" className='transition-all shadow-inner px-[10px] py-[15px] flex flex-col items-center'>
        
        <h1 className='text-[2.8rem] mt-[3vh] font-anta text-white'>Features</h1>
      <p className='text-gray-200 mb-[5vh]'>What we offer</p>
        <div className='mb-[7vh] mt-[3vh] mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]'>
            {
                featuresList.map((feature, index) => (
                    
                    <Image alt={"features"} width={100} height={100} src={feature.icon} className='w-[70vw] md:w-[60vw] xl:w-[60vw] shadow-spotlight  bg-[#121212B2]  border-[#2A2427] border-solid border-1 transition-transform duration-300 hover:scale-110  h-[22rem]  rounded-[18px] flex flex-col p-6' />
                     
                   
                ))
            }
          
        </div>
    </div>
  )
}

export default Features