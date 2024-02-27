import React from 'react'
import { Tweet } from 'react-tweet'
import * as containerStyles from "./container.module.css"

const TweetEmbed = (id: string) => {
  return (
    <div className={containerStyles.container}>
    <Tweet id={id}/>
  </div>
  )
}

export default TweetEmbed