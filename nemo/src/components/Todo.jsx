import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTitle, updateTitle } from '../redux/modules/list';

const Todo = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);
    console.log(user)
    return (
        <div style={{display: 'flex'}}>
        {user.map((user) => {
            return (
                <div key={user.id} style={{backgroundColor:'gray', width:'200px', height:'200px', margin: '20px'}}>
                    {user.title}
                    <button onClick={() => {
                        dispatch(deleteTitle(user.id))
                    }}>삭제</button>
                    <button onClick={() => {
                        dispatch(updateTitle(user.id))
                    }}>완료</button>
                </div>
                )
        })}
        </div>

    );
};

export default Todo;