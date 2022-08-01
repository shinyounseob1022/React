import React, { useEffect } from 'react';

const VideoPlayer = ({param, videos}) => {
    console.log(param.id)
    useEffect(() => {
        if(videos){
            console.log(videos[0].snippet)
        }
    },[])
    return (
        <div className="video__column">
            <iframe id="ytplayer" type="text/html" width="720" height="405"
            src={`https://www.youtube.com/embed/${param.id}?autoplay=1`}
            frameBorder="0" allowFullScreen />
            <div className='video__info'>
            </div>
        </div>
    );
};

export default VideoPlayer;
