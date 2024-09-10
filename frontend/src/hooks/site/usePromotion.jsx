import React, { useState, useEffect } from "react";

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

const usePromotion = () => {
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
  return {
    isMobile, slideProperties, hoveredIndex, setHoveredIndex, burgers
  };
};

export default usePromotion;
