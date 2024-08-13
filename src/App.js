import Transaction from "./components/Transaction";

function App() {    // parent component >> App, children component >> Title, Description, Transaction, ...

  const design = {color:'red', textAlign:"center", fontSize:"1.5rem"}
  
  return (
    <div>
      <h1 style={design}>Statement Application</h1>
      <Transaction />
    </div>
  );
}

export default App;
