import React from 'react'
import TweetPage from './TweetPage'
import { getTweet as _getTweet } from 'react-tweet/api'
const AllComponentes = async () => {
    const tweet = await _getTweet("1760240044361818453")
    console.log("new" ,tweet);
  return (
    <div className='feature px-[10px] py-[15px] flex flex-col items-center'>
        <TweetPage  tweet={tweet}/>
    </div>
  )
}

export default AllComponentes