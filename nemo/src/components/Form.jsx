import React from 'react';
import { useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTitle } from '../redux/modules/list';
import './form.css'

const Form = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);
    // console.log(user)// input text
    const inputTitle = useRef();
    const inputContent = useRef();
    // useEffect(() => {
    //     console.log(todo)
    // }, [todo])
    return (
        <form className='formBox'>
            <div className='formBox__left'>
                <div>
                    <label htmlFor="title">제목</label>
                    <input type="text" ref={inputTitle} name="title" className="input title"/>
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <input type="text" ref={inputContent} name="content" className="input content"/>
                </div>
                
            </div>
            <button className = "addBtn"onClick={(e) => {
                e.preventDefault();
                dispatch(addTitle({title: inputTitle.current.value, content: inputContent.current.value, id: user.length, isDone: false}));
                inputTitle.current.value = '';
                inputContent.current.value = '';
                }}>추가하기</button>
        </form>
    );
};

export default Form;