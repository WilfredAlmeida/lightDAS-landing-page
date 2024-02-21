"use client"
import React from 'react'
import Image from 'next/image'
import feat1 from '/Assets/Features/Feat1.svg'
import feat2 from '/Assets/Features/Feat2.svg'
import feat3 from '/Assets/Features/Feat3.svg'
import feat4 from '/Assets/Features/Feat4.svg'

const featuresList = [
    {
        feature:"Lightweight DAS for Solana",
        icon: '/Assets/Features/Feat1.svg',
        des: "Lorem Ipsum"
    },
    {
        feature: "LightDAS is a lighter version of the Metaplex Digital Asset RPC API",
        icon: '/Assets/Features/Feat2.svg',
        des: "Lorem Ipsum"
    },
    {
        feature: "Listen on Merkle Tree addresses via RPC web sockets",
        icon: '/Assets/Features/Feat3.svg',
        des: "Lorem Ipsum"
    },{
        feature: "Index the trees you care about",
        icon:'/Assets/Features/Feat4.svg',
        des: "Lorem Ipsum"
    }
]

const Features = () => {
  return (
    <div className='bg-[#F1F3F4] shadow-inner shadow-black px-[10px] py-[15px] flex flex-col items-center'>
        
        <div className='text-[2.8rem] my-[3vh] font-serif'>
           Features
        </div>
        <div className='mb-[7vh] mt-[3vh] mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]'>
            {
                featuresList.map((feature, index) => (
                    
                    <Image alt={"features"} width={100} height={100} src={feature.icon} className='w-[70vw] md:w-[60vw] xl:w-[60vw] backdrop-sepia-0 border-[1px] bg-white/30 transition-transform duration-300 hover:scale-110  h-[22rem]  rounded-[18px] shadow-xl border-t-1 flex flex-col p-6' />
                     
                   
                ))
            }
          
        </div>
    </div>
  )
}

export default Features