import React from 'react';
import { useSelector } from 'react-redux';
import {Working , Done} from './Todo'
import './list.css'

const List = () => {
    return (
        <div class="createSpace">
            <h2>Working</h2>
            <div className= "box Working" style={{display: 'flex'}}>
                <Working />
            </div>
            <h2>Done</h2>
            <div className= "box Done" style={{display: 'flex'}}>
                <Done />
            </div>
            {/* {user.filter((value) => !value.isDone).map((value) => <Todo/>)} */}
            {/* {user.filter((value) => value.isDone).map((value) => <Todo/>)} */}
        </div>
    );
};

export default List;