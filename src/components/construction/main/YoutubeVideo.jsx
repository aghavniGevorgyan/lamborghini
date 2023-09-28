import React from 'react'
import ReactPlayer from 'react-player'

function YoutubeVideo() {
  return (
    <div>
        <ReactPlayer 
            url='https://youtu.be/sitXeGjm4Mc?si=yJXWxfCPqSR7v3rZ'
            controls
            className="video"
        />
    </div>
  )
}

export default YoutubeVideo