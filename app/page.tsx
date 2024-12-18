import React from "react";
import HierrachyData from "@/lib/hierrachy-data.json";
import HierrachyItem from "./components/hierrachy-item";

function page() {
  return (
    <ul className="m-0 flex justify-center items-center mx-auto mt-24">
      {HierrachyData.map((item, index) => (
        <HierrachyItem hierrachyItem={item} key={index} />
      ))}
    </ul>
  );
}

export default page;
