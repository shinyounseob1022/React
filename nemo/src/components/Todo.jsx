import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTitle, updateTitle } from '../redux/modules/list';
    




export const Working = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);   
    return (
        <>
        {user.map((user) => {
            if(!user.isDone){
                return (
                    <div style={{display: 'flex'}}>
                        <div key={user.id} style={{backgroundColor:'gray', width:'200px', height:'200px', margin: '20px'}}>
                            <p>{user.title}</p>
                            <p>{user.content}</p>
                            <button onClick={() => {
                                dispatch(deleteTitle(user.id))
                            }}>삭제</button>
                            <button onClick={() => {
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
                    <div style={{display: 'flex'}}>
                        <div key={user.id} style={{backgroundColor:'gray', width:'200px', height:'200px', margin: '20px'}}>
                            <p>{user.title}</p>
                            <p>{user.content}</p>
                            <button onClick={() => {
                                dispatch(deleteTitle(user.id))
                            }}>삭제</button>
                            <button onClick={() => {
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

