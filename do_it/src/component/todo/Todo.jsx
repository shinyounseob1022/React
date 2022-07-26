import React from 'react';
import './style.css';
function Working ({inputValue, changeMode, onRemove}){
    return (
        <div className='content' style={{width: '100%', height: '200px', display:'flex'}}>
        {inputValue.map((value) => {
          if(!value.isDone){
            return (
              <div key={value.id} className='contentBox' style={{margin: '10px', width: '200px', height: '200px', border: '2px solid blue'}}>
                <p>{value.title}</p>
                <p>{value.content}</p>
                <div className='button-space'>
                  <button onClick={() =>{changeMode(value.id)}} style={{border: '2px solid red'}}>완료</button>
                  <button onClick={() =>{onRemove(value.id)}} style={{border: '2px solid black'}}>삭제</button>
                </div>

              </div>
            )
          } else {
            return null
          }
        })}
        </div>
    )
}

function Done ({inputValue, changeMode, onRemove}) {
    return (
      <div className='content' style={{width: '100%', height: '200px', display:'flex'}}>
      {inputValue.map((value) => {
        if(value.isDone){
          return (
            <div key={value.id} className='contentBox' style={{margin: '10px', width: '200px', height: '200px', border: '2px solid red'}}>
              <p>{value.title}</p>
              <p>{value.content}</p>
              <div className='button-space'>
                  <button onClick={() =>{changeMode(value.id)}} style={{border: '2px solid red'}}>취소</button>
                  <button onClick={() =>{onRemove(value.id)}} style={{border: '2px solid black'}}>삭제</button>
              </div>
            </div>
          )
        }
      })}
      </div>
    )

}

export {Working, Done};