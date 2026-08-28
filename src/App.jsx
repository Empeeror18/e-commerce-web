import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Checkout from "../pages/Checkout.jsx";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route, Links } from "react-router-dom";

function App() {
  return (
    <div classname="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
