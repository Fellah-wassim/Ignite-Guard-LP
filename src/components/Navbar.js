import React from "react";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-bold text-xl text-white bg-secondBlack py-4 px-16">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <ul className="flex items-center justify-center gap-8 ">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li className="">
            <a href="#">How it work</a>
          </li>
          <li className="">
            <a href="#">Services</a>
          </li>
          <li className="">
            <a href="#">News</a>
          </li>
          <li className="p-4 ">
            <a href="#">Contact</a>
          </li>
          <li className="bg-orange text-white hover:bg-white hover:text-orange duration-200 px-4 py-2">
            <button href="#" className="">
              Sign Up
            </button>
          </li>
          <li className="bg-secondBlack px-4 py-2 border-orange text-orange border-2 hover:text-white hover:bg-orange duration-200">
            <button href="#" className="">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
