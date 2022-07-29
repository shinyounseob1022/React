import React from 'react';
import Todo from './Todo'

const List = ({todo}) => {
    return (
        <div>
            <Todo todo={todo}/>
        </div>
    );
};

export default List;