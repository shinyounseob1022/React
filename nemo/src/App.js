import './App.css';
import React, {useState, useRef} from "react";
import {useSelector, useDispatch} from 'react-redux'
const inputEl = { current: null };

function App() {
  const onButtonClick = () => {
    inputEl.current.focus();
    inputEl.current.click();
  };
  const onInputClick = () => {
    alert("input clicked");
  };

  console.log({ inputEl });

  return (
    <>
      <input onClick={onInputClick} ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
export default App;
