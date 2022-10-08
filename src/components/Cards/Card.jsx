import React from "react";

function Card({ image, title, price, details }) {
  return (
    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image} alt="/" />
      <h2 className="text-xl font-bold text-center py-4">{title}</h2>
      <p className="text-2xl font-bold text-center">{price}</p>
      <div className="text-center font-medium">
        {details.map((detail) => (
          <p className="py-2 border-b mx-8 mt-4">{detail}</p>
        ))}
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        Start Trail
      </button>
    </div>
  );
}

export default Card;
