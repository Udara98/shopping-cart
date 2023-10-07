import "./App.css";
import Navbar from "./components/Navbar";
import "./variables.css";
import Shop from "../src/pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Shop />
    </div>
  );
}

export default App;
