import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import { searchTitle } from '../redux/modules/media';
import './header.css';

const Header = () => {
    const search_title = useRef();
    const titl = useSelector((state) => state.media);
    console.log(titl)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(titl)
    },[titl])
    
    return (
        <HeaderCss>
            <a href="/" className='logo'>
                <i className="fa-brands fa-youtube" ></i>
                <span className="logo__title">YOUTUBE</span>
            </a>
            <form action="" className="formBox">
                <input type="text" className='searchBar' ref={search_title}/>
                <button className="searchBtn" onClick={(e) => {
                    e.preventDefault();
                    dispatch(searchTitle({
                        title: search_title.current.value
                    }))
                    }}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </HeaderCss>
    );
};

export default Header;

const HeaderCss = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #010001;
    width: 1200px;
    margin: auto;
    height: 60px;
    position: fixed;
    top: 0;
`