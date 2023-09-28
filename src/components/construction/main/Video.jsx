import React from 'react'
import '../main/video.css'
import YoutubeVideo from './YoutubeVideo'
import play from './playIcon.svg'
function Video() {
  return (
    <div>
        <div className='videoLamborghini'>
            <img src={play} alt="" />
            смотреть онлайн
        </div>
        {/* <YoutubeVideo /> */}

    </div>
  )
}

export default Video