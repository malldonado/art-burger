import { useState, useEffect, useCallback } from "react";
import Product from "../../assets/product.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";

const products = [
  {
    image: Product,
    name: "Gourmet Mac and Cheese Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product2,
    name: "Caramelized Onion Turkey Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product3,
    name: "Jalapeno Popper Chicken Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product,
    name: "Gourmet Mac and Cheese Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product2,
    name: "Caramelized Onion Turkey Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: Product3,
    name: "Jalapeno Popper Chicken Burger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const useBurgers = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isHomePage, setIsHomePage] = useState(window.location.pathname === "/");

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1000);
  }, []);

  const handlePathChange = useCallback(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, [handlePathChange]);

  return { isMobile, isHomePage, products };
};

export default useBurgers;
