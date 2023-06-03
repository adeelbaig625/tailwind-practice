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
            Data Co's Analytics Dashboard is your go-to platform for gaining
            valuable insights from your data. With our intuitive and
            user-friendly interface, you can easily visualize, analyze, and
            interpret complex data sets. Whether you're tracking key performance
            indicators, monitoring customer behavior, or making data-driven
            decisions, our dashboard provides the tools you need to unlock the
            power of your data. Transform raw data into actionable insights and
            drive your business forward with Data Co's Analytics Dashboard.
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
