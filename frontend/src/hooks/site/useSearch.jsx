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

const useSearch = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handlePathChange = () => setIsHomePage(window.location.pathname === '/');

    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);
 return { isMobile, isHomePage, products };
}

export default useSearch;