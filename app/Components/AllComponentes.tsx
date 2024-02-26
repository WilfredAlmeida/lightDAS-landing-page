import React from 'react'
import TweetPage from './TweetPage'
import KnowTheTeam from './Roadmap'

const AllComponentes = async () => {
   
  return (
    <div className='feature px-[10px] py-[15px] flex flex-col items-center'>
        <TweetPage />
        <KnowTheTeam />

        
    </div>
  )
}

export default AllComponentes