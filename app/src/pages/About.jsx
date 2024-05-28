import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import AboutPage from "../components/about/aboutFull";

function About() {
  return (
    <div className="bg-black">
      <Navbar />
      <AboutPage/>
      <Footer />
    </div>
  );
}

export default About;
