import React from "react";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";

export const Services = () => {
  return (
    <div className=" flex flex-col gap-8 text-white py-20 bg-secondBlack">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl font-normal">Your Safety Is Our Priority </p>
      </div>
      <div className="flex gap-6 px-8 items-center justify-center">
        <div className="flex items-center justify-center w-[400px] h-[400px] overflow-hidden">
          <img src={service1} alt="" />
        </div>
        <div className="flex items-center justify-center w-[400px] h-[400px] overflow-hidden">
          <img src={service2} alt="" />
        </div>
        <div className="flex items-center justify-center w-[400px] h-[400px] overflow-hidden">
          <img src={service3} alt="" />
        </div>
      </div>
    </div>
  );
};
