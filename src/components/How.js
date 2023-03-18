import React from "react";
import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";

export const How = () => {
  return (
    <div className="flex flex-col text-white bg-secondBlack text-left text-lg pb-36">
      <h1 className="text-4xl font-bold text-center py-16">How It Work</h1>
      <div className="flex justify-center gap-6 items-center px-16">
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="text-white w-[100%]">
            utilizing cameras and AI to detect fires in real-time. Cameras are
            installed in strategic locations where they can effectively monitor
            for signs of fire. As the cameras capture footage, the video feed is
            sent to an AI model for analysis. It sends an alert to the system's
            monitoring center if it detects a fire. This information is critical
            for emergency responders to quickly assess the situation and take
            appropriate action.
          </p>
          <div className="w-[100%] h-[100%] overflow-hidden">
            <img src={work1} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div className="w-[100%] h-[100%] overflow-hidden">
            <img src={work2} alt="" className="w-full" />
          </div>
          <p className="text-white w-[100%]">
            utilizing cameras and AI to detect fires in real-time. Cameras are
            installed in strategic locations where they can effectively monitor
            for signs of fire. As the cameras capture footage, the video feed is
            sent to an AI model for analysis. It sends an alert to the system's
            monitoring center if it detects a fire. This information is critical
            for emergency responders to quickly assess the situation and take
            appropriate action.
          </p>
        </div>
      </div>
    </div>
  );
};
