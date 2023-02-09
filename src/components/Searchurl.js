import React from "react";

function Searchurl() {
  return (
    <div className="searchurl flex flex-col px-5 w-[60%] border-2 border-black py-3 bg-[#355E3B] rounded-xl mt-5">
      {/* Upper Part */}
      <div className="upperPart flex items-center justify-between">
        {/* profile */}
        <div className="profile flex">
          <img
            src={require("../images/eco.jfif")}
            alt=""
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
          />
          <div className="detailsf flex flex-col ml-4">
            <span className="text-[1rem]">Buy less , Choose well</span>
            <span className="text-sm text-gray-500">Make it Last</span>
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className="lowerPart flex items-center justify-between mt-5">
        {/* track */}
        <div className="track flex justify-between text-sm text-gray-500 flex-[2] items-center">
          <span></span>
          <img
            src={require("../images/box.png")}
            alt=""
            className="w-[26rem]"
          />
          <span> </span>
        </div>

        <div className="controls flex-1 flex items-center justify-around">
          <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442"></svg>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Searchurl;
