"use client";
import React, { useState } from "react";
import TweetEmbed from "./TweetEmbed";
import { Tweet } from "react-tweet";
import * as containerStyles from "./container.module.css";
import { FaAnglesDown } from "react-icons/fa6";
import { tweetIds } from "../utils/Data/tweet";

const TweetPage = () => {
  // State to manage the number of tweets shown
  const [visibleTweetCount, setVisibleTweetCount] = useState(6); // Initially show 3 tweets

  // Function to handle "Show More" click
  const showMoreTweets = () => {
    setVisibleTweetCount(tweetIds.length); // Show all tweets
  };

  return (
    <div className="pt-[5vh] flex flex-col items-center justify-center w-[80vw] mt-[5vh]">
      <h1 className="text-[2.8rem] mt-[3vh] text-white">Tweets</h1>
      <p className="text-gray-200 mb-[5vh]">Words of the Community</p>
      <div className={`h-full relative`}>
        <div
          className={`columns-1 md:columns-2 lg:columns-3 px-[12vw] mt-[5vh] `}
        >
          {tweetIds.slice(0, visibleTweetCount).map((id, index) => (
            <div key={id} className={containerStyles.container}>
              <Tweet id={id} />
            </div>
          ))}
        </div>

        {visibleTweetCount !== tweetIds.length && (
          <>
            <div className="relative max-w-full">
              <div className="overlay_feat absolute bottom-0 left-0 m-0 z-2 h-[466px] w-[100%]"></div>

              <hr className="h-[0.1px] w-[100vw] relative mx-auto bg-gray-600 border-0 border-blur-[20]" />
              <button
                onClick={showMoreTweets}
                className="absolute z-[99] bottom-[-30px] h-[70px] flex items-center justify-center w-[70px] left-[50%] px-4 py-2 rounded-[50%] bg-white text-black hover:text-white hover:bg-[#FF7B15] transition duration-300 -translate-x-[50%]"
              >
                <FaAnglesDown style={{ width: 25, height: 25 }} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TweetPage;
