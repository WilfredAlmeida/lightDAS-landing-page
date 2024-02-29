import React from 'react'
import TweetPage from './TweetPage'
import KnowTheTeam from './Roadmap'
import AboutFounders from './AboutFounders'
import Features from './Features'
import Footer from './Footer'

const AllComponentes = async () => {
   
  return (
    <div className='container feature px-[10px] max-w-full py-[15px] flex flex-col items-center'>
        <Features />
        <TweetPage />
        <KnowTheTeam />

    <AboutFounders />
    <Footer /> 
    </div>
  )
}

export default AllComponentes