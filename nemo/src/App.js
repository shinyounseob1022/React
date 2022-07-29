import './App.css';
import React, {useState, useRef} from "react";
import Form from './components/Form'
import Title from './components/Title'
import List from './components/List'


const App = () => {
    const [title, setTitle] =useState('')
    const [todo, setTodo] = useState([
        {id: 0, title: ''}
    ])
    // console.log(todo.length)

    return (
        <div>
            <Title/>
            <Form todo={todo} setTodo={setTodo}/>
            <List todo={todo} />
        </div>
    );
};


export default App;
