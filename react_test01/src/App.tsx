import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // 변수(바인딩) -> 화면에 영향이 있음
  
  const [count, setCount] = useState(0);
  //const [count, setCount] = useState(0); -> count = int
  //const [count, setCount] = useState(""); -> count = str

 // const [inputVal,setinputVal] = useState("")
// Q1. inputVal 이라는 바인딩 변수, set 함수 만들자

  // 변수(시스템) -> 함수수식 등에 쓰이지
  let dummy1 = 1 + 1;
  let score = 95;
  //useEffect : 페이지가 시작될때 useEffect를 무조건 1번은 실행함 어따가 써먹을 수 있을까?
  useEffect(() => {
  }, []);

  return (
    <div>
      <div>
        <div>
          점수: {score} 등급 : {rank}
        </div>
      </div>
      <div>
        <h1>1+1={dummy1}</h1>
      </div>
    </div>
  );
  {/* 오류 바로 보여주는거봐라 */}
  {/* 매우 특이한 주석처리 asdf */}
}




function Set(){
  const [inputVal,setinputVal] = useState<string>("")
  
  
  
  //바인딩변수하나만들고 - > value 에 바인딩변수 매기고
  return(
    <div>
      <input value ={inputVal} onChange={(event)=>{
        setinputVal(event?.target?.value ?? "")
      } } />  
    
      
       <div>
         야 그럼 하나의 파일에는 하나의 함수밖에 못담는거야? ANS = 아니다.. main.tsx 를 참고하자
       TypeScript에서 JSX.Element 반환 타입 명시
       default export 컴포넌트
       default export는 하나만 → App
       나머지는 named export → Set
       export default function App(): JSX.Element
       export function Set(): JSX.Element
       {/* - 이거 css에서 조정해서 가운데맞춤 없애든가 해야지 */}
       </div>
</div>


  )
}
export default Set;
