import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="finance" element={<Finance />} />
        <Route path="business" element={<Business />} />
        <Route path="sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
