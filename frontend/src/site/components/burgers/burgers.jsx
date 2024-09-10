import useBurgers from "../../../hooks/site/useBurgers";

const Menu = () => {
  const { isHomePage, isMobile, products } = useBurgers();

  const renderPromotionTitle = () =>
    isHomePage && (
      <span className="md:text-[100px] text-[50px] ml-3 md:ml-0 text-white font-bold text-left uppercase">
        BURGERS
      </span>
    );

  const renderProduct = (product, index) => (
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
          alt={product.name}
        />
      </div>
    </div>
  );

  return (
    <div className="mt-24 max-w-7xl mx-auto">
      {renderPromotionTitle()}
      <div className={`w-full grid ${isMobile ? "grid-cols-1 md:grid-cols-2" : "grid-cols-3"} gap-1`}>
        {products.map(renderProduct)}
      </div>
    </div>
  );
};

export default Menu;
