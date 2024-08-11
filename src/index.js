import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from './App';                                             // App ตัวแรกเป็นชื่อ Component, App ตัวที่สอง เป็นชื่อไฟล์
// import HelloComponent from "./components/HelloComponent";

// *การสร้าง Functional Component
// function HelloComponent() {
//     return <h1>หวัดดี Functional Component จ้า</h1>
// }
// // ***************************************************************

// *การสร้าง Class Component
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>หวัดดี Class Component จ้า</h1>;                         // เรียกใช้ method render จาก classแม่ คือ React.Component
//   }
// }
// // ***************************************************************

// *การสร้าง External Component >> ต้องสร้างจากไฟล์ภายนอก ("./components/HelloComponent")
// // ***************************************************************

const root = ReactDOM.createRoot(document.getElementById("root"));      // แสดงผล App(Component) ทำตำแหน่ง root(public/index/)
root.render(<StrictMode><App /></StrictMode>);                       // render >> แสดงผล App(Component)     // ใช้ <App /> แทน <App></App> เพื่อประหยัดพื้นที่โค้ด
// root.render(<StrictMode><HelloComponent /></StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
