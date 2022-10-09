import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 px-4 mx-auto max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DataCo.</h1>
      <ul className={"hidden md:flex"}>
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 h-full top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000"
            : " fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
          DataCo.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b font-medium border-gray-600 cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b font-medium border-gray-600 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b font-medium border-gray-600 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b font-medium border-gray-600 cursor-pointer">
            About
          </li>
          <li className="p-4 font-medium border-gray-600 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
