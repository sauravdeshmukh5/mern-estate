import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SingUp from "./pages/SingUp";
import About from "./pages/About";
import Header from "./component/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/about" element={<About />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
