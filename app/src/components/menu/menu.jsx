import Product from "../../assets/product.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";

const products = [
  { image: Product, name: "Gourmet Mac and Cheese Burger" },
  { image: Product2, name: "Caramelized Onion Turkey Burger" },
  { image: Product3, name: "Jalapeno Popper Chicken Burger" }
];

function menu() {
  return (
    <div className="w-full h-96 relative my-24 max-w-7xl mx-auto">
      <div className="flex h-full">
        <div className="w-[25%] flex justify-center items-center pt-10 h-full cursor-pointer">
          <div className="flex-col flex">
            <span className="text-5xl text-white font-bold text-center">OUT MENU</span>
            <button className="text-black bg-white border-2-transparent border-2 hover:border-2-white hover:text-white hover:bg-black w-[150px] h-[50px] font-bold mt-6">
              SHOW ALL
            </button>
          </div>
        </div>{" "}
        {products.map((product, index) => (
          <div key={index} className="text-white w-[25%] h-full flex justify-center items-start cursor-pointer">
            <div className="w-[300px]">
              <img
                className="w-[300px] h-[300px] object-cover"
                src={product.image}
                alt=""
              />
              <span className="text-white hover:text-[#f8b825] font-bold text-2xl text-center uppercase block">
                {product.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default menu;
