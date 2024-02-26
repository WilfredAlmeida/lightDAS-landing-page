import React from 'react'
import Image from 'next/image'
import { roadmapData } from '../utils/Data/roadmap'
const KnowTheTeam = () => {
  return (
    <div className=' shadow-inner px-[10px] mb-[5vh] mt-[5vh] w-full py-[15px] flex flex-col items-center'>
        
    <h1 className='text-[2.8rem] mt-[3vh]  text-white'>Roadmap</h1>
  <p className='text-gray-200 mb-[5vh]'>What is coming</p>
  <div className='flex justify-start px-[7vw] items-center w-full h-full'>
 
      <ol className="relative border-s border-gray-00 rounded-lg ">
      {
    roadmapData.map((data, index) => (
         <li className="mb-10 ms-4 ">
        <div className="absolute w-3 h-3 bg-[#FF7B15] rounded-full mt-1.5 -start-1.5 border border-white"></div>
        <div className='hover:translate-x-2 transition-all delay-75'>
        <time className="mb-1 text-sm font-normal leading-none text-[#FF7B15] ">{data.date}</time>
        <h3 className="text-lg font-semibold  text-gray-300">{data.title}</h3>
        <p className="mb-4 text-base font-normal text-gray-400 ">{data.description}</p>
    </div>
   
    </li>
     ))
    }
  
      </ol>
</div>
   




  </div>
  )
}

export default KnowTheTeam