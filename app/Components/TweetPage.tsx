'use client'
import React, { useState } from 'react'
import TweetEmbed from './TweetEmbed';
import { Tweet } from 'react-tweet';
import * as containerStyles from "./container.module.css"
import { FaAnglesDown } from "react-icons/fa6";
const tweetIds = [
  "1760239071455027629", "1760240044361818453", "1760051793579454480", "1758236761699012609", "1759655151005036596", "1759607307191898435", "1760239071455027629", "1760240044361818453", "1760051793579454480", "1758236761699012609", "1759655151005036596", "1759607307191898435"
]

const TweetPage = () => {

  // State to manage the number of tweets shown
  const [visibleTweetCount, setVisibleTweetCount] = useState(6); // Initially show 3 tweets

  // Function to handle "Show More" click
  const showMoreTweets = () => {
    setVisibleTweetCount(tweetIds.length); // Show all tweets
  };

  return (
    <div className='pt-[5vh] flex flex-col items-center justify-center w-[100vw]'>
      <h1 className='text-[2.8rem] mt-[3vh] font-serif text-white'>Tweets</h1>
      <p className='text-gray-200 mb-[5vh]'>Feedbacks & Love from Our Users</p>
      <div className={`h-full relative`}>
      

        <div className={`columns-1 md:columns-2 w-[100%] lg:columns-3 gap-[-20%] px-[5vw] `}>
          {
            tweetIds.slice(0, visibleTweetCount).map((id, index) => (
              <div key={id} className={containerStyles.container}>
                <Tweet id={id} />
              </div>
            ))
          }
        </div>

        {
          visibleTweetCount !== tweetIds.length &&
          <>
      

            <div className='relative  max-w-full'>
              <div className='overlay_feat absolute bottom-0 left-0 m-0 z-2 h-[466px] w-[100%]'></div>

              <hr className="h-[0.5px] w-[100vw] relative mx-auto bg-gray-600 border-0 border-t-blur-[20] " />
              <button onClick={showMoreTweets} className="absolute z-[99] bottom-[-30px] h-[70px] flex items-center justify-center w-[70px] left-[50%] px-4 py-2 rounded-[50%] bg-white text-black hover:text-white hover:bg-[#FF7B15] transition duration-300">
                <FaAnglesDown style={{ width: 25, height: 25 }} />

              </button>
              </div>


          </>


        }


      </div>
    </div>
  )
}

export default TweetPage