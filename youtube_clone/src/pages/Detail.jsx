import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Video from '../components/Video';
const Detail = ({videos}) => {
    const param = useParams()
    return (
        <div>
            <Header/>
            <VideoPlayer param = {param} videos={videos}/>
            <div className="videoList">
                {videos.map((video) =>{
                    if(video.id !== param.id){
                        return (
                            <Video video={video} key={video.id}/>
                        )
                    }
                })}
            </div>
            
        </div>
    );
};

export default Detail;

// https://www.youtube.com/watch?v=

{/* <img src={video.snippet.thumbnails.high.url}/> */}
