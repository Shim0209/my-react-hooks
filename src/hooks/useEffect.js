import React, {useEffect, useState} from 'react';


const App = () => {
  const sayHello = () => console.log("Hi");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  /*
    useEffect(함수, [변수]) 
    첫번째인자(componentDidmount) : 컴포넌트가 마운트 되었을때 수행할 함수. 단, 디펜던시가 없을경우([] <- 이거 조차 없는경우) 업데이트시에도 수행됨.
    두번째인자(componentDidUpdate) : []디펜던시에 변화가 생기면 함수를 실행시킴, 배열이므로 여러개 등록가능
    리턴값(componentWillUnMount) : 함수부분에 return {} 으로 정의. 언마운트때 수행할 함수.
  */
  useEffect(sayHello, [number]);
 
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
