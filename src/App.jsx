import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/shop" element={<h1>Shop</h1>} />
        <Route path="/collections" element={<h1>Collections</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;