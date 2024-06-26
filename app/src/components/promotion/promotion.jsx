import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const burgers = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Classic Cheeseburger",
    discount: "10%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bacon Deluxe Burger",
    discount: "20%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Mushroom Swiss Burger",
    discount: "15%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1199956/pexels-photo-1199956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "BBQ Bacon Burger",
    discount: "25%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Jalapeno Popper Burger",
    discount: "10%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hawaiian Teriyaki Burger",
    discount: "20%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Jalapeno Popper Burger",
    discount: "10%",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hawaiian Teriyaki Burger",
    discount: "20%",
  },
];

const Promotion = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  const renderPromotionTitle = () => {
    const currentPage = window.location.href.split('/').pop();
    if (currentPage === 'promotion') {
      return null;
    }
    return (
      <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
        PROMOTION
      </span>
    );
  };

  const renderSlideShow = () => (
    <Slide {...slideProperties}>
      {burgers.map((burger, index) => (
        <div key={index} className="flex justify-center mt-14">
          <div className="w-[500px] h-[500px] relative cursor-pointer">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={burger.imageUrl}
              alt={burger.name}
            />
            <span className="absolute text-3xl inset-0 flex items-center justify-center text-center text-white font-bold uppercase px-4">
              {burger.name}
            </span>
          </div>
        </div>
      ))}
    </Slide>
  );

  const renderGrid = () => (
    <div className="grid xl:grid-cols-4 grid-cols-2 justify-items-center gap-y-7 mt-16">
      {burgers.slice(0, 8).map((burger, index) => (
        <div
          key={index}
          className="xl:w-[300px] xl:h-[300px] h-[350px] w-[350px] relative cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
            src={burger.imageUrl}
            alt={burger.name}
          />
          <span className="absolute text-3xl inset-0 flex top-[15px] text-right text-white font-bold uppercase px-4">
            {burger.discount}
          </span>
          <span className="absolute text-3xl inset-0 flex items-center justify-center text-center text-white font-bold uppercase px-4">
            {burger.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto my-24">
      {renderPromotionTitle()}
      {isMobile ? renderSlideShow() : renderGrid()}
    </div>
  );
};

export default Promotion;
