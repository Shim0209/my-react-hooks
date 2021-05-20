import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useConfirm = (message = "", callback, rejection) => {
  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  
  if(!callback && typeof callback !== "function" ) {
    return;
  }
  if(!rejection && typeof rejection !== "function" ) {
    return;
  }
  return confirmAction;
}

const App = () => {
  const deleteWorld = () => console.log("Delete the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;

/*
  confirmDelete가 사실 confirmAction이다.

  confirmDelete가 button의 클릭이벤트와 연동되어 있어서
  해당버튼에서 클릭이벤트 발동시 confirmAction이 실행된다.

  confirmAction은 window.confirm을 실행하면서 전달해준 메세지를 
  띄워준다.

  true가 전달되면 전달해준 callback함수가 실행되고,
  false가 전달되면 전달해준 rejection함수가 실행된다.
*/