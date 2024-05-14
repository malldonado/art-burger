import Image from "../../assets/banner.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEffect, useRef } from "react";

function Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        bannerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[700px] relative overflow-hidden mt-20 text-center">
      <div
        ref={bannerRef}
        className="w-full h-[700px] absolute bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* <span className="text-[200px] text-white font-bold h-full w-full m-auto relative fixed top-1/2 bottom-0 left-0 right-0">ART BURGER</span> */}
      </div>
      <div className="absolute bottom-10 font-bold text-4xl left-10">
        <FaTwitter className="cursor-pointer text-white hover:text-[#f8b825]" />
        <FaFacebookF className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
        <FaInstagram className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
      </div>
    </div>
  );
}

export default Banner;
