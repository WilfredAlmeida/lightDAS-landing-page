import React from 'react'
import { Tweet } from 'react-tweet'
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet'


const TweetPage = async ({tweet}) => {
  

  console.log(tweet)
  const tweetDate = new Date(tweet!.created_at).toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
  });
  return (
    <div className='pt-[5vh] mb-[100vh] flex flex-col items-center justify-center w-[100vw]'>
      <h1 className='text-[2.8rem] mt-[3vh] font-serif'>Tweets</h1>
      <p >Feedbacks & Love from Our Users</p>

      <div className='grid grid-cols-3 mx-auto w-full gap-[5vw] px-[5vw]'>
        <div className=" backdrop-sepia-0 border-[1px] bg-white/30 transition-transform duration-300 hover:scale-110  h-[22rem]  rounded-[18px] shadow-xl border-t-1 flex flex-col p-6">
          <div className="tweet-header">
            <h4>{tweet?.user.name}</h4> {/* Display the profile name */}
            <span>@{tweet?.user.screen_name}</span> {/* Display the profile ID (username) */}
            <div>{tweetDate}</div> {/* Display the formatted date and time */}
          </div>
          <p>{tweet?.text}</p> {/* Display the tweet text */}
          {tweet?.quoted_tweet && (
            <blockquote>
              {/* Display the quoted tweet, if any */}
              <p>{tweet?.quoted_tweet.text}</p>
            </blockquote>
          )}
          {/* Explicitly not rendering comments, "read more", or other elements */}
        </div>

        <div className=" backdrop-sepia-0 border-[1px] bg-white/30 transition-transform duration-300 hover:scale-110 rounded-[18px] shadow-xl border-t-1 flex flex-col p-6">
          <div className="flex items-center gap-2 mb-5">
            <img src={tweet?.user.profile_image_url_https} alt={"image of the user"} className='w-50 h-50 rounded-[50%]'/>
            <div className='flex flex-col items-start justify-center'>
            <h4 className='font-semibold text-[0.9rem] text-[#FF7B15]'>{tweet?.user.name}</h4> {/* Display the profile name */}
            <span className='text-[0.6rem] font-light'>@{tweet?.user.screen_name}</span> {/* Display the profile ID (username) */}
            </div>
            
         
          </div>
          <p className='text-[0.9rem] mb-[1.5vh] font-normal leading-[1.5]'>{tweet?.text} + {"ajdgjhdvhagvdgasvahsdgf hedhfawhdgfansdvanwh hfadbacwdgfcqwabd hafDNBAVDBWA HFADGGQW"}</p> {/* Display the tweet text */}
          {tweet?.quoted_tweet && (
            <div className='border-[0.5px] rounded-[18px] p-4 border-solid border-stone-500'>
             
              <p className='text-[0.7rem] font-light leading-[1.5]'>{tweet?.quoted_tweet.text}</p>
            </div>
          )}
           <div>{tweetDate}</div>
      
        </div>

        <div className=" backdrop-sepia-0 border-[1px] bg-white/30 transition-transform duration-300 hover:scale-110  h-[22rem]  rounded-[18px] shadow-xl border-t-1 flex flex-col p-6">
          <div className="tweet-header">
            <h4>{tweet?.user.name}</h4> {/* Display the profile name */}
            <span>@{tweet?.user.screen_name}</span> {/* Display the profile ID (username) */}
            <div>{tweetDate}</div> {/* Display the formatted date and time */}
          </div>
          <p>{tweet?.text}</p> {/* Display the tweet text */}
          {tweet?.quoted_tweet && (
            <blockquote>
              {/* Display the quoted tweet, if any */}
              <p>{tweet!.quoted_tweet.text}</p>
            </blockquote>
          )}
          {/* Explicitly not rendering comments, "read more", or other elements */}
        </div>


      </div>
    </div>
  )
}

export default TweetPage