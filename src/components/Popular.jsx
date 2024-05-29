import React from "react";
import PopularCircle from "./PopularCircle";

const Popular = ({ data }) => {
  return (
    <div className="py-6">
      <div className="text-3xl font-bold mb-6">Popular Dishes</div>
      <div className="flex gap-12 overflow-auto popular">
        {data && data.map((ele) => <PopularCircle key={ele.id} ele={ele} />)}
        {data && data.map((ele) => <PopularCircle key={ele.id} ele={ele} />)}
      </div>
    </div>
  );
};

export default Popular;
