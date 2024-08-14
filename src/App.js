import Transaction from "./components/Transaction";
import "./App.css"
import FormComponent from "./components/FormComponent";
import { v7 as uuidv7 } from 'uuid';

function App() {    // parent component >> App, children component >> Title, Description, Transaction, ...

  const design = {color:'red', textAlign:"center", fontSize:"1.5rem"}
  const initData = [                                // initData >> ข้อมูลที่ถูกนิยามในตอนเริ่มต้น(เป็นข้อมูลตัวอย่าง ยังไม่ได้อ้างอิงตามข้อมูลจริง)
    {id:1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    {id:2, title: "ค่าน้ำมัน", amount: 5000 },
    {id:3, title: "ค่าเช่าบ้าน", amount: 8000 },
  ];
  
  return (
    <div className="container">
      <h1 style={design}>Statement Application</h1>
      <FormComponent />
      <Transaction items = {initData}/>             {/* prop ข้อมูลเข้า Transaction */}
    </div>
  );
}

export default App;
