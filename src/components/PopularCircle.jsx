import React from "react";

const PopularCircle = ({ ele }) => {
  return (
    <div className="border-2 w-fit border-red-600 p-1 rounded-full relative">
      <img
        src={ele.image}
        alt={ele.name}
        className="min-w-16 h-16 rounded-full"
      />
      <div className="bg-black bg-opacity-40 absolute top-1 left-1 w-16 h-16 rounded-full flex justify-center items-center text-sm text-white text-center">
        {ele.name}
      </div>
    </div>
  );
};

export default PopularCircle;
