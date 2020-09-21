/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['감자1','감자2','감자3']);
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);



  function 제목바꾸기 () {
    var newArray = [...글제목]; //useState 를 딥카피
    newArray[0] = '대왕감자';
    newArray[1] = '감자1';
    newArray[2] = '감자2';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>말하는 감자</div>
      </div>
      <button onClick={ 제목바꾸기 } > 🍟 </button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경( 따봉 + 1 ) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { 글제목[1]} <span onClick={ () => { 따봉변경1( 따봉 + 1 ) } }>👍</span> {따봉1} </h3>
        <p>2월 18일 발행</p>
        <hr/>
        <h3> { 글제목[2] } <span onClick={ () => { 따봉변경2( 따봉 + 1 ) } }>👍</span> {따봉2} </h3>
        <p>2월 19일 발행</p>
        <hr/>
        </div>

        <Modal></Modal>
      </div>
    );
  }

  function Modal() {
    return (
      <div classname="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

export default App;
