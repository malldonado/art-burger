import React from "react";
import { GoStar } from "react-icons/go";
import useRating from "../../../hooks/site/useRating";

function rating() {

  const { stars } = useRating();

  return (
    <div className="flex gap-2 mt-2">
      {stars.map((_, index) => {
        return <GoStar className="text-white text-2xl cursor-pointer" key={index} />;
      })}
    </div>
  );
}

export default rating;
