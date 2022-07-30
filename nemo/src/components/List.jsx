import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo'

const List = () => {
    const user = useSelector((state) => state.list);
    console.log('user:', user)
    
    return (
        <div>
            <h1>Working</h1>
            {user.filter((value) => !value.isDone).map((value) => <Todo/>)}
            <h1>Done</h1>
            {user.filter((value) => value.isDone).map((value) => <Todo/>)}
        </div>
    );
};

export default List;