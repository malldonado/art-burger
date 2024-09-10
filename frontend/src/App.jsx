import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Promotion from "./site/pages/Promotion";
import Index from "./site/pages/Index";
import Menu from "./site/pages/Menu";
import Search from "./site/pages/Search";
import Checkout from "./site/pages/Checkout";
import Items from '../src/panel/pages/Items';
import Orders from '../src/panel/pages/Orders';
import CategoriesPanel from '../src/panel/pages/Categories';
import Users from '../src/panel/pages/Users';
import Settings from '../src/panel/pages/Settings';
import About from "./site/pages/About";
import Product from "./site/pages/Product";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/panel-items" element={<Items />} />
        <Route path="/panel-orders" element={<Orders />} />
        <Route path="/panel-categories" element={<CategoriesPanel />} />
        <Route path="/panel-users" element={<Users />} />
        <Route path="/panel-settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
