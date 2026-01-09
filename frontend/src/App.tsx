/** @format */

import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Orders } from "./pages/Orders";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Global Wrapper: pt-20 ensures content starts below the fixed navbar */}
      <div className="pt-20 min-h-screen custom-bg-image selection:bg-[#FF4461] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;