import React from "react";
import phoneIcon from "../assets/images/phone 2.svg";
import mapIcon from "../assets/images/Map 1.svg";
import Email from "../assets/images/Email 1.svg";
import website from "../assets/images/Group.svg";

export const Contact = () => {
  return (
    <div className="flex items-center justify-center gap-12 bg-secondBlack pb-28">
      <a href="tel:+213-799-1387">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={phoneIcon} alt="phone icon" className="w-[65px] h-[65px]" />
          <p className="text-4xl text-white ">Phone</p>
          <p className="text-2xl text-orange">+213-799-1387</p>
        </div>
      </a>
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={mapIcon} alt="phone icon" className="w-[65px] h-[65px]" />
        <p className="text-4xl text-white ">Address</p>
        <p className="text-2xl text-orange">Algeria, Algiers</p>
      </div>
      <a href="mailto:ig.guard@gmail.com">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={Email} alt="phone icon" className="w-[65px] h-[65px]" />
          <p className="text-4xl text-white ">Email</p>
          <p className="text-2xl text-orange">Ig.Guard@email.com</p>
        </div>
      </a>
      <a href="https://github.com/Fellah-wassim/IgnitionGuard">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={website} alt="phone icon" className="w-[65px] h-[65px]" />
          <p className="text-4xl text-white ">Website</p>
          <p className="text-2xl text-orange">www.IgnitionGuard.com</p>
        </div>
      </a>
    </div>
  );
};
