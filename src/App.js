import "./App.css";
import Transaction from "./components/Transaction";

const Title = ()=> <h1>โปรแกรมบัญชี รายรับ - รายจ่าย</h1>

function App() {            // parent component >> App
  return (                  // children component >> Title, Description, Transaction, ...
    <div>
      <Title /> 
      <Transaction />
    </div>
  );
}

export default App;
