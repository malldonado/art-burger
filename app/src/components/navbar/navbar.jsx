import Logo from "../../assets/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";

function navbar() {
  return (
    <div className="w-full h-24 bg-black flex items-center justify-between max-w-7xl mx-auto px-4">
      <div className="max-w-7xl h-full w-full flex justify-between items-end mx-auto">
        <div className="w-[70%] h-full m-auto flex items-end">
          <img className="w-40 mr-10" src={Logo} alt="" />
          <ul className="flex text-white font-bold text-xl gap-x-6">
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <a href="/home">MENU</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <a href="/home">CATEGORIES</a>
            </li>
            <li className="border-b-4 border-transparent hover:border-b-3 hover:border-[#f8b825]">
              <a href="/home">BURGERS</a>
            </li>
          </ul>
        </div>
        <div className="w-[30%] flex justify-end text-5xl gap-x-5">
          <div className="text-white hover:text-[#f8b825] cursor-pointer">
            <MdOutlineSearch className="h-full text-[41px] flex items-end pt-[2px]" />
          </div>
          <div className="text-white hover:text-[#f8b825] cursor-pointer">
            <MdOutlinePersonOutline className="text-[44px]" />
          </div>
          <div className="text-white hover:text-[#f8b825] cursor-pointer">
            <MdOutlineShoppingBag className="text-[45px] pb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
