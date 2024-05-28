import Navbar from "../components/navbar/navbar";
import ProductPage from "../components/product/product";
import Footer from "../components/footer/footer";

function Product() {
  return (
    <div className="bg-black">
      <Navbar />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default Product;
