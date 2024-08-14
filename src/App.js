import Transaction from "./components/Transaction";
import "./App.css"
import FormComponent from "./components/FormComponent";

function App() {    // parent component >> App, children component >> Title, Description, Transaction, ...

  const design = {color:'red', textAlign:"center", fontSize:"1.5rem"}
  
  return (
    <div className="container">
      <h1 style={design}>Statement Application</h1>
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;
