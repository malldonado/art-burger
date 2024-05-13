import Banner from "../../assets/banner.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function banner() {
  return (
    <div className="w-full h-full relative mt-10 mb-32">
      <img className="w-full h-full object-cover" src={Banner} alt="" />
      <div className="absolute bottom-10 font-bold text-4xl left-10">
        <FaTwitter className="cursor-pointer text-white hover:text-[#f8b825]" />
        <FaFacebookF className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
        <FaInstagram className="mt-5 cursor-pointer text-white hover:text-[#f8b825]" />
      </div>
    </div>
  );
}

export default banner;
