import React from "react";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
        <img src="Laptop.png" alt="/" className="w-[400px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam
            eligendi recusandae repellat? Quas quae distinctio repellendus
            nostrum voluptatum id esse! Ipsum obcaecati nesciunt, aut nemo
            repellat vel. Officiis, praesentium!
          </p>
          <button className="bg-black w-[160px] rounded-md font-medium my-6 py-2 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
