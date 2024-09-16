import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <div className="fixed w-full z-50">
        <Navbar/>
      </div>

     <div>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
