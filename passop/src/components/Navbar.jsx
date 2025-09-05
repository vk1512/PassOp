import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700  text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
        <div className="logo font-bold  text-white text-2xl ">
          <span className="text-green-500"> &lt; </span>
          Pass
          <span className="text-green-500">OP</span>
          <span className="text-green-500"> &gt; </span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a href="#" className="hover:font-bold">
              Home
            </a>
            <a href="#" className="hover:font-bold">
              About
            </a>
            <a href="#" className="hover:font-bold">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="bg-green-500 justify-center items-center flex w-30 p-1 py-2 rounded-full ring-white ring-1">
          <img src="/icons/github.svg" alt="github logo" className="w-6 " />
          <span className="font-bold text-white px-1">Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
