import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="lg:col-span-2 my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[160px] rounded-md font-medium my-6 ml-4 py-2 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
