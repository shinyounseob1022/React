import React from 'react';
import { useSelector } from 'react-redux';
import {Working , Done} from './Todo'

const List = () => {
    const user = useSelector((state) => state.list);
    console.log('user:', user)
    
    return (
        <div>
            <h1>Working</h1>
            <div style={{display: 'flex'}}>
                <Working />
            </div>
            <h1>Done</h1>
            <div style={{display: 'flex'}}>
                <Done />
            </div>
            {/* {user.filter((value) => !value.isDone).map((value) => <Todo/>)} */}
            {/* {user.filter((value) => value.isDone).map((value) => <Todo/>)} */}
        </div>
    );
};

export default List;