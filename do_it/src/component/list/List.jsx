import React from 'react';
import {Working, Done} from '../todo/Todo'
import './style.css';
function List ({inputValue, changeMode, onRemove}) {
    return (
      <div className="list">
        <h2>Working</h2>
        <Working inputValue={inputValue} changeMode={changeMode} onRemove={onRemove}/>
        <h2>Done</h2>
        <Done inputValue={inputValue} changeMode={changeMode} onRemove={onRemove}/>
      </div>
    )
}

export default List;