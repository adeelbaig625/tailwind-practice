import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4">
        <Card
          image="single.png"
          title="Single User"
          price="$149"
          details={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
        <Card
          image="double.png"
          title="Partnership"
          price="$199"
          details={["1 TB Storage", "3 User Allowed", "Send up to 10 GB"]}
        />
        <Card
          image="triple.png"
          title="Group Account"
          price="$299"
          details={["5 TB Storage", "10 User Allowed", "Send up to 20 GB"]}
        />
      </div>
    </div>
  );
}

export default Cards;
