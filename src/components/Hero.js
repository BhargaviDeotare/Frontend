import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const box = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const recycle = {
    true: {
      left: "2rem",
    },
    false: {
      left: "8.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#2E8B57] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Sustainable Products</span>{" "}
          <span>
            <b>At Affordable Prices</b>
          </span>
          <span className="text-[15px] text-[#000000]">
            <b>
              We manufacture environmentally friendly kits for a very <br />
              reasonable cost while maintaining quality.
            </b>
          </span>
          {/* download ads */}
          <div>
            <span className="text-[13px]">Buy Now on</span>
            <DownloadAds />
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../images/bgg.jpg")}
            alt=""
            className="absolute top-[-12rem] left-[9rem] border-[2px] rounded-[10px]"
          />
          <img
            src={require("../images/box1.webp")}
            alt=""
            className="absolute top-[-2rem] h-[18rem] left-[1rem] border-[2px] rounded-[10px]"
          />
          <motion.img
            variants={box}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../images/download 2.jfif")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px] border-[2px] rounded-[10px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../images/images1.jfif")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem] rounded-[10px]"
          />
          <motion.img
            variants={recycle}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../images/ppp.jfif")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
