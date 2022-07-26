import React, {useState, useRef, useEffect} from 'react';
import Header from "../header/Header";
import Form from '../form/Form';
import List from '../list/List';
import Layout from '../layout/Layout';

function TodoList (){
    const [count, setCount] = useState(1)
    const [inputValue, setInputValue] = useState([
        {id: 0, title: 'React', content: '짱어려움', isDone: false},
      ])
    const title = useRef();
    const content = useRef();

    const addContent = (e) => {
      e.preventDefault();
      console.log(count)
      setCount(count + 1)
      setInputValue([...inputValue, {id: count, title: title.current.value, content: content.current.value, isDone: false}])
      title.current.value = '';
      content.current.value = '';
    }
    
    const onRemove = (id) => {
      setInputValue(inputValue.filter((value) => value.id !== id))
    }

    const changeMode = (id) => {
      setInputValue(inputValue.map((value) => value.id == id ? {...value, isDone: !value.isDone} : {...value, isDone: value.isDone}));
      console.log(inputValue);
    }

    return (
    <div className='App'>
        <Layout>
            <Header />
            <Form title={title} content={content} addContent={addContent}/>
            <List inputValue={inputValue} changeMode={changeMode} onRemove={onRemove}/>
        </Layout>
    </div>)
}
export default TodoList;