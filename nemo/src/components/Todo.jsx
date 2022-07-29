import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todo = ({todo}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);
    console.log(user)
    return (
        <div style={{display: 'flex'}}>
        {user.map((user) => {
            return (
                <div key={user.id}style={{backgroundColor:'gray', width:'200px', height:'200px', margin: '20px'}}>
                    {user.title}
                </div>
                )
        })}
        </div>

    );
};

export default Todo;