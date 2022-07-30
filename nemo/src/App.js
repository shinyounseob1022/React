import './App.css';
import React, {useState, useRef} from "react";
import Form from './components/Form'
import Title from './components/Title'
import List from './components/List'


const App = () => {

    // console.log(todo.length)

    return (
        <div>
            <Title/>
            <Form/>
            <List/>
        </div>
    );
};


export default App;
