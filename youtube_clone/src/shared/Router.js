import React, { useEffect, useState } from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home"
import Detail from "../pages/Detail"
// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
    //global state
    

    // fetch 
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow' //옵션을 전달하는 부분임
        };

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopula" +
                    "r&maxResults=25&key=AIzaSyDqs7L5s7Rp4vdEWsEMHfiWWfxKHhzqAJM%20",
            requestOptions
        )
            .then(response => response.json())//retch가 전달되면 text로 변환하고
            .then(result => setVideos(result.items)) // 변환된 text를 콘솔에 출력하고 !
            .catch(error => console.log('error', error)); // error가 나온다면 콘솔에 error출력 !
    }, [])
    console.log(videos)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home videos={videos} />}/>
        <Route path="/detail/:id" element={<Detail videos={videos}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;