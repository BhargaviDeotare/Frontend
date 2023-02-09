import { React, useState } from "react";
import Searchurl from "./Searchurl";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const background = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[55rem] px-[5rem] bg-[#2E8B57] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1]  flex items-center justify-between rounded-b-[5rem] ">
      {/* left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../images/pacakging.jfif")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]  rounded-[10px] "
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../images/background.jfif")}
          alt=""
          className="w-[16rem] top-[26rem] height-[34rem] absolute rounded-[10px]"
        />{" "}
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          className="w-[19rem] top-[33rem] left-[12rem] right-[12rem] absolute rounded-[10px]"
        />
        <motion.img
          variants={background}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../images/bg.jfif")}
          alt=""
          className="w-[17rem] top-[40rem] right-[6rem] absolute rounded-[80px]"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the Name or Url"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../images/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../images/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Product by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#000000]">
            Every purchase- every product or service bought has some impact on
            the environment,
            <br /> the economy and on people.
          </span>
        </div>

        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <Searchurl />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
