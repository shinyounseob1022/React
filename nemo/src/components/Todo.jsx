import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTitle, detailTitle, updateTitle } from '../redux/modules/list';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './todo.css'




export const Working = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);   
    return (
        <>
        {user.map((user) => {
            if(!user.isDone){
                return (
                        <div className="todoBox" key={user.id}>
                            <Link to={`/detail/${user.id}`}><p>{user.title}</p></Link>
                            <p>{user.content}</p>
                            <div className="button__Box">
                                <button className="deleteBtn" onClick={() => {
                                    dispatch(deleteTitle(user.id))
                                }}>삭제</button>
                                <button className="completeBtn" onClick={() => {
                                    dispatch(updateTitle(user.id))
                                }}>완료</button>
                            </div>

                    </div>
                        )
            }
        })}
        </>
    )
}

export const Done = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);   
    return (
        <>
        {user.map((user) => {
            if(user.isDone){
                return (
                        <div className="todoBox" key={user.id}>
                            <Link to={`/detail/${user.id}`}><p>{user.title}</p></Link>
                            <p>{user.content}</p>
                            <div className="button__Box">
                                <button className="deleteBtn" onClick={() => {
                                    dispatch(deleteTitle(user.id))
                                }}>삭제</button>
                                <button className="completeBtn" onClick={() => {
                                    dispatch(updateTitle(user.id))
                                }}>취소</button>
                            </div>
                        </div>
                        )
            }
        })}
        </>
    )
}

