import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"; 
import Home from "./Home";  
import Search from "./Search";
import "./../assets/css/index.css"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
