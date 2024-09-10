import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import usePromotion from "../../../hooks/site/usePromotion";

const Promotion = () => {
  const { isMobile, slideProperties, hoveredIndex, setHoveredIndex, burgers } =
    usePromotion();

  const renderPromotionTitle = () => {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage !== "promotion") {
      return (
        <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
          PROMOTION
        </span>
      );
    }
    return null;
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
