import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Menu from "../components/menu/menu";
import Categories from "../components/categories/categories";
import Rating from "../components/rating/rating";
import Burgers from "../components/burgers/burgers";
import Footer from "../components/footer/footer";

function Index() {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <Categories />
      <Rating />
      <Burgers />
      <Menu />
      <Footer />
    </div>
  );
}

export default Index;
