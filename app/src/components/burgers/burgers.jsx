import React, { useState, useEffect } from "react";
import Product from "../../assets/product.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";

const products = [
  {
    image: Product,
    name: "Gourmet Mac and Cheese Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product2,
    name: "Caramelized Onion Turkey Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product3,
    name: "Jalapeno Popper Chicken Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product,
    name: "Gourmet Mac and Cheese Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product2,
    name: "Caramelized Onion Turkey Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product3,
    name: "Jalapeno Popper Chicken Burger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function menu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  return (
    <div className="mt-24 max-w-7xl mx-auto">
      <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
        BURGERS
      </span>
      {isMobile ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-1">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-black text-white p-4 rounded-lg flex flex-row justify-start cursor-pointer ${
                isMobile ? "mb-4" : ""
              }`}
            >
              <div className="w-[40%] flex items-center text-left">
                <div>
                  <span className="text-white hover:text-[#f8b825] font-bold text-sm text-left uppercase block">
                    {product.name}
                  </span>
                  <p className="text-[12px] mt-3">{product.description}</p>
                  <button className="text-black bg-white border-2 border-transparent hover:border-white hover:text-white hover:bg-black w-[90px] h-[35px] font-bold mt-3">
                    BUY
                  </button>
                </div>
              </div>
              <div className="flex justify-start w-[60%]">
                <img
                  className="w-[250px] h-[250px] object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black text-white p-4 rounded-lg flex flex-row justify-start cursor-pointer"
            >
              <div className="w-[40%] flex items-center text-left">
                <div>
                  <span className="text-white hover:text-[#f8b825] font-bold text-sm text-left uppercase block">
                    {product.name}
                  </span>
                  <p className="text-[12px] mt-3">{product.description}</p>
                  <button className="text-black bg-white border-2 border-transparent hover:border-white hover:text-white hover:bg-black w-[90px] h-[35px] font-bold mt-3">
                    BUY
                  </button>
                </div>
              </div>
              <div className="flex justify-start w-[60%]">
                <img
                  className="w-[250px] h-[250px] object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default menu;
