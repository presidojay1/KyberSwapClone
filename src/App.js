import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Trade from "./Components/TradePage/Trade";
import HomePage from "./Components/Homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Trade />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
