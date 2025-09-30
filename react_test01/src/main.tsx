import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//Q1.  한 파일 안에 또 다른 함수를 사용하려면? ex) 함수명 = Set  => import App, { Set } from "./App";
  // import React from "react";
  // import ReactDOM from "react-dom/client";
  // import App, { Set } from "./App";

  // const root = ReactDOM.createRoot(document.getElementById("root")!);

  // root.render(
  //   <React.StrictMode>
  //     <App />
  //     <Set />
  //   </React.StrictMode>
  // );
