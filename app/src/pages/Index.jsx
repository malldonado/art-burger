import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Menu from "../components/menu/menu";
import Promotion from "../components/promotion/promotion";
import Burgers from "../components/burgers/burgers";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
// import Rating from "../components/rating/rating";

function Index() {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <Promotion />
      <Burgers />
      <Menu />
      <About/>
      <Footer />
    </div>
  );
}

export default Index;
