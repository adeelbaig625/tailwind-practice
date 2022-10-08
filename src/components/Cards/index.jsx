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
          image="single.png"
          title="Single User"
          price="$149"
          details={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
        <Card
          image="single.png"
          title="Single User"
          price="$149"
          details={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
      </div>
    </div>
  );
}

export default Cards;
