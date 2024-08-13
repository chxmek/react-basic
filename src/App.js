import Transaction from "./components/Transaction";

function App() {            // parent component >> App
  return (                  // children component >> Title, Description, Transaction, ...
    <div>
      <h1>โปรแกรมบัญชี รายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
