import React from "react";
import vdsImg from "../assets/images/vdsImg.png";
import heroImg from "../assets/images/hero.png";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-32 bg-secondBlack text-white py-20">
      <img src={vdsImg} alt="hero" className="" />
      <div className="flex justify-center gap-8 ">
        <div className="flex flex-col items-start justify-center text-left w-[40%] px-4  gap-8">
          <h1 className="text-4xl font-bold">
            Earth Needs Us It's Time to Return The Favor !
          </h1>
          <p className="text-lg font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quidem quos nemo quas. Quisquam, quae. Quisquam, quae.
            Quisquam, quae. Quisquam, quae.
          </p>
          <button
            href="#"
            className="text-white bg-orange px-4 py-2 font-bold text-xl hover:bg-white hover:text-orange duration-200"
          >
            Register Now
          </button>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};
