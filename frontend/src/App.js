import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Signup } from "./pages/Signup/Signup";
import { Market } from "./pages/Market/Market";
import { Customers } from './pages/Customers/Customers';
import { Orders } from './pages/Orders/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/market" element={<Market />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
