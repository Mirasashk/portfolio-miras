import React from "react";

const NavBar = () => {
  return (
    <div className="absolute w-full h-screen top-0 left-0">
      <div className="grid grid-cols-12 px-40">
        <div className="flex col-span-4 items-center w-full p-4 z-20">
          <div className="text-white font-bold text-xl cursor-pointer">
            Miras Ashktorab
          </div>
        </div>
        <div className="flex col-span-8 justify-end items-center z-20">
          <ul className="flex items-center col-span-8 ">
            <li className="text-white font-semibold cursor-pointer mx-4">
              About
            </li>
            <li className="text-white font-semibold cursor-pointer mx-4">
              Projects
            </li>
            <li className="text-white font-semibold cursor-pointer mx-4">
              Contact
            </li>
            <button className=" hover:bg-teal-600">Resume / CV</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
