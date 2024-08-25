import Navbar from '../components/navbar/navbar';
import MenuFull from '../components/menu/menuFull';
import Footer from '../components/footer/footer';

function Menu() {
  return (
    <div className="bg-black">
      <Navbar />
      <MenuFull/>
      <Footer/>
    </div>
  );
}

export default Menu;
