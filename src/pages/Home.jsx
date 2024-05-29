import React, { useEffect, useState } from "react";
import DateTime from "../components/DateTime";
import Categories from "../components/Categories";
import Popular from "../components/Popular";
import Recommended from "../components/Recommended";

const Home = () => {
  const [resData, setResData] = useState("");

  useEffect(() => {
    fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    )
      .then((res) => res.json())
      .then((data) => setResData(data));
  }, []);

  return (
    <div className="lg:w-2/3 mx-auto">
      <h1 className="text-2xl font-semibold">Select Dishes</h1>
      <div className="bg-black h-20"></div>
      <DateTime />
      <div className="w-[90%] mx-auto">
        <Categories />
        <Popular data={resData.popularDishes} />
        <Recommended data={resData.dishes}/>
      </div>
    </div>
  );
};

export default Home;
