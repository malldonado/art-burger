import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Search from "../components/search/search";

function SearchPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
}

export default SearchPage;
