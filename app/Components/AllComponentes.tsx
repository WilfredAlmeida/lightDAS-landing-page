import React from 'react'
import TweetPage from './TweetPage'
import KnowTheTeam from './Roadmap'
import AboutFounders from './AboutFounders'

const AllComponentes = async () => {
   
  return (
    <div className='feature px-[10px] max-w-full py-[15px] flex flex-col items-center'>
        <TweetPage />
        <KnowTheTeam />
    <AboutFounders />
        
    </div>
  )
}

export default AllComponentes