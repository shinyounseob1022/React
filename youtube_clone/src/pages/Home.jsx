import React from 'react';
import Header from '../components/Header'
import VideoList from '../components/VideoList';

const Home = ({videos}) => {
    return (
        <div>
            <Header/>
            <VideoList videos={videos}/>
        </div>
    );
};

export default Home;


