import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Panel from "./pages/Panel";
import Search from "./pages/Search";
import Burger from "./pages/Burger";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/search" element={<Search />} />
        <Route path="/burger" element={<Burger />} />
      </Routes>
    </Router>
  );
}

export default App;
