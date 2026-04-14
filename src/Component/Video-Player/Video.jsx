import React, { useRef } from 'react'
import "./Video.css"

const Video = ({ playState, setPlayState }) => {

const player = useRef(null);
const closePlayer = (e)=>{
    if(e.target === player.current){
            setPlayState(false);
    }
}

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <div className="video-container">
        {/* Close button */}
        <button className="close-btn" onClick={() => setPlayState(false)}>✖</button>

        {/* YouTube embed */}
        <iframe 
          width="100%" 
          height="480" 
          src="https://www.youtube.com/embed/SW7K-qnU5as?autoplay=1&mute=1" 
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Video
