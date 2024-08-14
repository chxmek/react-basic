import Transaction from "./components/Transaction";
import "./App.css"

function App() {    // parent component >> App, children component >> Title, Description, Transaction, ...

  const design = {color:'red', textAlign:"center", fontSize:"1.5rem"}
  
  return (
    <div className="container">
      <h1 style={design}>Statement Application</h1>
      <Transaction />
    </div>
  );
}

export default App;
