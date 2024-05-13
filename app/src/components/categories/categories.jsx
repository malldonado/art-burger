import React, { useState } from "react";

const categories = () => {
  // Array de objetos contendo a URL da imagem e o nome do hambúrguer
  const burgers = [
    { imageUrl: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: "Classic Cheeseburger" },
    { imageUrl: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Bacon Deluxe Burger" },
    { imageUrl: "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Mushroom Swiss Burger" },
    { imageUrl: "https://images.pexels.com/photos/1199956/pexels-photo-1199956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "BBQ Bacon Burger" },
    { imageUrl: "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Jalapeno Popper Burger" },
    { imageUrl: "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Hawaiian Teriyaki Burger" },
    { imageUrl: "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Jalapeno Popper Burger" },
    { imageUrl: "https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", name: "Hawaiian Teriyaki Burger" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      <span className="text-[100px] text-white font-bold text-left uppercase">CATEGORIES</span>
      <div className="grid grid-cols-4 justify-items-center gap-y-7 mt-16">
        {burgers.slice(0, 8).map((burger, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px] relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              src={burger.imageUrl}
              alt={burger.name}
            />
            <span className="absolute text-3xl inset-0 flex items-center justify-center text-center text-white font-bold uppercase px-4">
              {burger.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categories;

