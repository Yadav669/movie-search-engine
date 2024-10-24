import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"; // Correct path without "components"
import Home from "./Home";   // Correct path without "components"
import Search from "./Search"; // Correct path without "components"
import "./../assets/css/index.css"; // Correct path for CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Updated path to lowercase */}
        <Route path="/home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
