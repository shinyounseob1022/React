import React from 'react';
import Video from './Video'
import {useSelector } from 'react-redux/es/exports';
import './videoList.css'

const VideoList = ({videos}) => {
    const title = useSelector((state) => state.media.title);
    const regex = new RegExp(`${title}`);
    if(title == null){
        return (
            <div className="videoList">
                {videos.map((video) =>{
                        return (
                            <Video video={video} key={video.id}/>
                        )
                })}
            </div>
        )
    } else {
        return (
            <div className="videoList">
                {videos.map((video) =>{
                    if(video.snippet.title.toLowerCase().search(regex) !== -1){
                        return (
                            <Video video={video} key={video.id}/>
                        )
                    }
                })}
            </div>
        );
    }

};

export default VideoList;