import { useState } from "react";
import {
  Card1LineChart,
  Card2LineChart,
  Card3LineChart,
  Card4LineChart,
} from "./charts";

export const Cards = () => {
  return (
    <>
      <div className="Card1 w-1/4 h-1/4 bg-primary rounded-md flex flex-col justify-start items-start text-white p-4 pr-4">
        <div className="flex">
          <span className="font-semibold text-2xl ml-2">26k</span>
          <span className="flex items-center text-white/80 ml-2">
            (12.4%
            <svg
              className="w-[16px] h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon
                fill="white"
                points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
              ></polygon>
            </svg>
            )
          </span>
        </div>
        <span className="text-white/80 ml-2">something else</span>
        <div className="w-full h-32 flex justify-center items-end">
          <Card1LineChart />
        </div>
      </div>
      <div className="Card2 w-1/4 h-1/4 bg-secondary rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
          <span className="flex items-center text-white/90">
            (12.4%
            <svg
              className="w-[16px] h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon
                fill="white"
                points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
              ></polygon>
            </svg>
            )
          </span>
        </div>
        <span className="text-white/90">Income</span>
        <div className="w-full h-32 flex justify-center items-end">
          <Card2LineChart />
        </div>
      </div>
      <div className=" Card3 w-1/4 h-1/4 bg-warning rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
          <span className="flex items-center text-white/90">
            (12.4%
            <svg
              className="w-[16px] h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon
                fill="white"
                points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
              ></polygon>
            </svg>
            )
          </span>
        </div>
        <span className="text-white/90">Income</span>
        <div className="w-full h-32 flex justify-center items-end">
          <Card3LineChart />
        </div>
      </div>
      <div className="Card4 w-1/4 h-1/4 bg-error rounded-md flex flex-col text-white p-4">
        <div className="flex">
          <span className="font-semibold text-2xl">26k</span>
          <span className="flex items-center text-white/90">
            (12.4%
            <svg
              className="w-[16px] h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon
                fill="white"
                points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
              ></polygon>
            </svg>
            )
          </span>
        </div>
        <span className="text-white/90">Income</span>
        <div className="w-full h-32 flex justify-center items-end">
          <Card4LineChart />
        </div>
      </div>
    </>
  );
};
