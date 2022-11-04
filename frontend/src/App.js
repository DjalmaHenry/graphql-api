import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup/Signup";
import { Market } from "./pages/Market/Market";
import { Customers } from './pages/Customers/Customers';
import { Orders } from './pages/Orders/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders/:customer_id" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
