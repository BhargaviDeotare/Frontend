import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#3F6D2A] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Buy the best</span>
        <span>
          <b>Sustainable products Now!</b>
        </span>
        <span className="text-[2rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
          GREEN IS THE NEW BLACK NOW!!.
        </span>
      </div>
      {/* dowload ads */}
      <div className="mt-14">
        <DownloadAds />
      </div>
    </div>
  );
}

export default Download;
