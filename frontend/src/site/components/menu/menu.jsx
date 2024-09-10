import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Product from "../../../assets/product.jpg";
import Product2 from "../../../assets/product2.jpg";
import Product3 from "../../../assets/product3.jpg";
import useMenu from "../../../hooks/site/useMenu";

const products = [
  { image: Product, name: "Gourmet Mac and Cheese Burger" },
  { image: Product2, name: "Caramelized Onion Turkey Burger" },
  { image: Product3, name: "Jalapeno Popper Chicken Burger" },
];

function Menu() {

  const { slideProperties, isMobile } = useMenu();

  return (
    <div className="my-24 max-w-7xl mx-auto">
      <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
        MENU
      </span>
      <div className="w-full md:h-96 relative md:flex justify-around">
        <div className="md:w-1/4 w-full h-72 flex flex-col justify-center items-center md:pt-10 cursor-pointer">
          <span className="text-5xl text-white font-bold text-center">
            OUT MENU
          </span>
          <button className="text-black bg-white border-2-transparent border-2 hover:border-2-white hover:text-white hover:bg-black w-[150px] h-[50px] font-bold mt-6">
            SHOW ALL
          </button>
        </div>{" "}
        {isMobile ? (
          <div className="block md:hidden">
            <Slide {...slideProperties}>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="text-white h-full md:flex justify-center items-start cursor-pointer"
                >
                  <img
                    className="w-full h-auto object-cover"
                    src={product.image}
                    alt=""
                  />
                  <span className="text-white hover:text-[#f8b825] font-bold text-xl md:text-2xl text-center uppercase block">
                    {product.name}
                  </span>
                </div>
              ))}
            </Slide>
          </div>
        ) : (
          <>
            {products.map((product, index) => (
              <div
                key={index}
                className="text-white w-full md:w-1/4 h-full flex justify-center items-start cursor-pointer"
              >
                <div className="w-full md:w-[300px]">
                  <img
                    className="w-full lg:h-[300px] sm:h-[250px] object-cover"
                    src={product.image}
                    alt=""
                  />
                  <span className="text-white hover:text-[#f8b825] font-bold text-lg xl:text-2xl text-center uppercase block">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
