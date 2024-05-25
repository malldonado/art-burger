import Logo from "../../assets/logo.svg";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { MdOutlineSearch } from "react-icons/md";
// import { MdOutlinePersonOutline } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <div className="w-full h-64 bg-black max-w-7xl mx-auto px-4">
      <div className="mt-20">
        <div className="max-w-7xl h-full w-full md:flex md:justify-between justify-center items-end mx-auto">
          <div className="md:w-[70%] w-full h-full m-auto flex md:items-end justify-center md:justify-start mb-10 md:mb-0">
            <img className="w-40 md:mr-10" src={Logo} alt="" />
          </div>
          <div className="md:w-[30%] flex md:justify-end md:text-3xl gap-x-5 w-full justify-center text-2xl">
            <div className="text-white hover:text-[#f8b825] cursor-pointer">
              <FaTwitter className="cursor-pointer text-white hover:text-[#f8b825]" />
            </div>
            <div className="text-white hover:text-[#f8b825] cursor-pointer">
              <FaFacebookF className="cursor-pointer text-white hover:text-[#f8b825]" />
            </div>
            <div className="text-white hover:text-[#f8b825] cursor-pointer">
              <FaInstagram className="cursor-pointer text-white hover:text-[#f8b825]" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white block text-center mt-20">
        <div>Malldonado.dev © 2024. All rights reserved.</div>
      </div>
    </div>
  );
}

export default footer;
