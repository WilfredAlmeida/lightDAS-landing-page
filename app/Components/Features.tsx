import React from 'react'
import Image from 'next/image'

const featuresList = [
    {
        feature:"Lightweight DAS for Solana",
        icon: '/Assets/solana.png',
        des: "Lorem Ipsum"
    },
    {
        feature: "LightDAS is a lighter version of the Metaplex Digital Asset RPC API",
        icon: '/Assets/asset.png',
        des: "Lorem Ipsum"
    },
    {
        feature: "Listen on Merkle Tree addresses via RPC web sockets",
        icon: '/Assets/listening.png',
        des: "Lorem Ipsum"
    },{
        feature: "Index the trees you care about",
        icon: '/Assets/list.png',
        des: "Lorem Ipsum"
    }
]

const Features = () => {
  return (
    <div className='bg-[#F1F3F4] px-[10px] py-[15px] flex flex-col items-center'>
        
        <div className='text-[2.8rem] mt-[5vh] font-serif'>
           Features
        </div>
        <div className='mt-[5vh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[6rem]'>
            {
                featuresList.map((feature, index) => (
                    
                    <div className='w-[22rem] bg-white transition-transform duration-300 hover:scale-110  h-[22rem]  rounded-[18px] shadow-xl border-t-1 flex flex-col border-solid border-black p-6'>
                        <p className='pt-[2vh]'></p>
                  
                        <Image src={feature.icon} alt={"an icon"} width="50" height={"50"}/>
                        <p className='text-[1.2rem] font-normal mt-[3vh]'>{feature.feature}</p>
                        <p className='text-[0.9rem] font-thin mt-[2vh]'>{feature.des}</p>
                   </div>
                ))
            }
          
        </div>
    </div>
  )
}

export default Features