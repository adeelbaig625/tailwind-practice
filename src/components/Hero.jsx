import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] md:text-2xl sm:text-xl text-lg font-bold p-2">
          GROW WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-4">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center py-2">
          <p className="md:text-2xl sm:text-xl text-lg font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-2xl sm:text-xl text-lg font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="sm:text-lg text-base font-bold text-gray-500 max-w-[80%] mx-auto">
          Monitor your data analytics to increase revenure for BTB,BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto py-2 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
