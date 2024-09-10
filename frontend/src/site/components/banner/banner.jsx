import Image from "../../../assets/banner.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import useBanner from "../../../hooks/site/useBanner";

function Banner() {
  const { bannerRef } = useBanner();

  return (
    <div className="w-full lg:h-[700px] sm:h-[550px] xs:h-[450px] h-[250px] relative overflow-hidden mt-20 text-center">
      <div
        ref={bannerRef}
        className="w-full lg:h-[700px] sm:h-[450px] xs:h-[350px] h-[250px] absolute bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="absolute bottom-10 font-bold xs:text-4xl text-2xl md:left-10 left-4">
        <FaTwitter className="cursor-pointer text-white hover:text-[#f8b825]" />
        <FaFacebookF className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
        <FaInstagram className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
      </div>
    </div>
  );
}

export default Banner;
