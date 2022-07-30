import React from 'react';
import { useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTitle } from '../redux/modules/list';


const Form = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.list);
    // console.log(user)// input text
    const inputTitle = useRef();
    // useEffect(() => {
    //     console.log(todo)
    // }, [todo])
    return (
        <form>
            <input type="text" ref={inputTitle}/>
            <button onClick={(e) => {
                e.preventDefault();
                dispatch(addTitle({title: inputTitle.current.value, id: user.length, isDone: false}));
                }}>추가하기</button>
        </form>
    );
};

export default Form;