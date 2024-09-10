import React, { useState } from "react";
import Rating from "../rating/rating";

const ProductPage = () => {
  const [image, setImage] = useState(1);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <span className="text-5xl">{image}</span>
              </div>

              <div className="flex -mx-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 px-2">
                    <button
                      onClick={() => setImage(i)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                        image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                      }`}
                    >
                      <span className="text-2xl">{i}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-white text-2xl md:text-3xl overflow-hidden">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h2>
            <div className="flex items-center space-x-4 my-4">
              <p className="text-[#ffc100] text-xl font-semibold">-12%</p>
              <span className="font-bold text-white text-3xl">$25</span>
            </div>
            <p className="text-white">
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
              exercitationem porro saepe ea harum corrupti vero id laudantium
              enim, libero blanditiis expedita cupiditate a est.
            </p>
            <div className="flex justify-start py-4 space-x-4 w-auto items-end">
              <form class="w-16">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                >
                  Qty
                </label>
                <select
                  id="countries"
                  class="text-sm rounded-lg  block w-full p-2.5 bg-white dark:placeholder-gray-400 text-black outline-none"
                >
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold bg-white text-black block"
              >
                Add to Cart
              </button>
            </div>
            <Rating/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
