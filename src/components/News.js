import React from "react";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";

export const News = () => {
  return (
    <div className="flex bg-secondBlack text-left px-16 py-28">
      <div className="flex gap-12 w-[50%] text-lg">
        <div className="flex flex-col gap-4 w-[345px] h-[530] border-t-2 bg-white border-orange text-orange p-4">
          <img src={news1} alt="" className="w-[300px] h-[181px]" />
          <h3 className=" font-bold text-3xl">
            Tornado of fire rages in northern Algeria
          </h3>
          <p className="text-lightenBlack">
            Algerian firefighters were on Thursday battling a string of blazes,
            fanned by drought and a blistering heatwave, that have killed at
            least 38 people and left destruction in their wake.
          </p>
          <a
            href="#"
            className="font-bold hover:bg-white hover:text-orange duration-200"
          >
            Learn More &rarr;
          </a>
        </div>

        <div className="flex flex-col gap-4 w-[345px] h-[530] border-t-2 bg-white border-orange text-orange p-4">
          <img src={news2} alt="" className="w-[300px] h-[181px]" />
          <h3 className=" font-bold text-3xl">
            Fire at Tunisian Ennahdha party HQ
          </h3>
          <p className="text-lightenBlack">
            A former Tunisian prime minister is among the 18 people who were
            injured in a deadly fire at the headquarters of the moderate
            Islamist Ennahdha party in Tunis on Thursday.
          </p>
          <a href="#" className="font-bold">
            Learn More &rarr;
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 gap-4">
        <p className="text-orange text-2xl font-bold">News & Stories</p>
        <h1 className="text-white text-4xl font-bold">
          <span className="text-orange text-4xl font-bold">Latest </span> News
          And Stories
        </h1>
        <p className="text-white text-xl">
          In recent wildfires in Algeria and other parts of the world have
          highlighted the urgent need for effective fire detection systems that
          can protect both human life and the natural environment. As we become
          more aware of the impact of climate change and other environmental
          factors on the frequency and severity of wildfires, it's clear that we
          must take action to protect ourselves and the planet we call home. By
          creating innovative fire detection technologies that use the latest
          advancements in AI, machine learning, and sensor technologies, we can
          help to prevent fires from starting and respond more quickly when they
          do.
        </p>
        <button className="w-fit text-white bg-orange px-4 py-2 font-bold text-xl hover:bg-white hover:text-orange duration-200">
          View All News
        </button>
      </div>
    </div>
  );
};
