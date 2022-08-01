import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './video.css'

const Video = ({video}) => {
    return (
        <VideoBox>
            <Link to={`/detail/${video.id}`}>
                <img src={video.snippet.thumbnails.high.url}/>
            </Link>

            <div className="video__info" key={video.id}>
                <h1 className="video__title">{video.snippet.title}</h1>
                <p className="video__channelName">{video.snippet.channelTitle}</p>
            </div>
        </VideoBox>
    );
};

export default Video;

const VideoBox = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin-top: 30px;
`