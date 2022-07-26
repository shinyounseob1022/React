import React from 'react';
import './style.css';
function Form ({title, content, addContent}) {
    return (
        <form className='form'>
            <div>
                <span>
                    <label htmlFor="title">제목</label>
                    <input name='title' type="text" ref={title} className='input'/>
                </span>
                <span>
                    <label htmlFor="content">내용</label>
                    <input name='content' type="text" ref={content} className='input'/>
                </span>
            </div>

            <button onClick={addContent}>추가하기</button>
        </form>
    )

}
export default Form;