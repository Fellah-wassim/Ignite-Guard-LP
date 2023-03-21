import React from "react";
import footerIMG from "../assets/images/footer.png";

export const Footer = () => {
  return (
    <div className="relative  py-28 bg-secondBlack">
      <img
        src={footerIMG}
        alt=""
        className="brightness-50  w-[100vw] h-[350px] "
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0%] text-5xl text-white font-bold">
        <p>
          <span className="text-orange"> Contact</span> US
        </p>
      </div>
    </div>
  );
};
