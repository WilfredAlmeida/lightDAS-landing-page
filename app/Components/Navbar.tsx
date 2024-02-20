"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const navLinks = [
    {
        name: "About",
        link: "/"
    },
    {
        name: "GitHub",
        link: "/"
    },
    {
        name: "Features",
        link: "/"
    },
    {
        name: "Follow Us Now",
        link: "/",
        button: true
    },
]

const Navbar = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    // State to store the direction of the scroll
    const [scrollDirectionDown, setScrollDirectionDown] = useState(true);


    useEffect(() => {

        const handleScroll = () => {
            // Get the current scroll position
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Determine the scroll direction
            if (currentScrollTop > lastScrollTop) {
              // Scrolling down
              setScrollDirectionDown(false);
            } else {
              // Scrolling up
              setScrollDirectionDown(true);
            }
      
            // Update the last scroll position
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
          };
      
          // Add the scroll event listener
          window.addEventListener('scroll', handleScroll);
      
          // Clean up function
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };

    }, [lastScrollTop])




      const navStyle = 'navbarStyle border-[1px] w-[85vw] transform 0.2s ease fixed top-0 my-8 rounded-[50px] mx-auto backdrop-sepia-0 bg-white/30'
      const dynamicStyle = !scrollDirectionDown ? "translate-y-[-150%]" : 'translate-y-(0)'
      return (
        <div className={`${navStyle} ${dynamicStyle}`}>
            <div className='flex w-full items-center justify-between' >

                <a href='/' className='px-10 py-2 flex items-center text-[1rem] md:text-[1.5rem] lg-[2rem] text-black hover:text-white delay-75 transition-all cursor-pointer gap-5'>
                   <Image src='/Assets/logo.svg' alt="logo" width={50} height={50}/> 
                   <p className='font-semibold'>light DAS</p>
                </a>
                <div className='px-10 flex gap-5 items-center'>
                    {
                        navLinks.map((nav) => (


                            nav.button ? <button className='px-2 md:px-4 py-2 text-[0.6rem] xs:hidden lg:visible md:visible bg-[#FF7B15] hover:bg-slate-200 delay-75 hover:text-gray-900 transition-all text-white rounded-[8px]'>{nav.name}</button> : <a href={nav.link} className=' hover:underline active:underline focus:underline text-[0.6rem] lg:text-[0.9rem]'>{nav.name}</a>


                        ))
                    }
                </div>
            </div>


        </div>

    )
}

export default Navbar