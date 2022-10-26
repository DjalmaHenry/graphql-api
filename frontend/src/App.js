import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { Market } from "./pages/Market/Market";
import { Publish } from "./pages/Publish/Publish";
import { Profile } from "./pages/Profile/Profile";
import { Provider } from "./pages/Provider/Provider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/market" element={<Market />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/provider" element={<Provider />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;