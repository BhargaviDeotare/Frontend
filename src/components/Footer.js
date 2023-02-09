import React from "react";
import CenterMenu from "./CenterMenu";
import { SiFacebook, SiTwitter, SiYoutube, SiLinkedin } from "react-icons/si";

function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#2E8B57] h-[35rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      {
        <div className="flex w-[100%] justify-center mt-14">
          <div className={SocialStyle}>
            <SiFacebook />
          </div>{" "}
          <div className={SocialStyle}>
            <SiTwitter />
          </div>{" "}
          <div className={SocialStyle}>
            <SiYoutube />
          </div>{" "}
          <div className={SocialStyle}>
            <SiLinkedin />
          </div>
        </div>
      }
      {/* detail */}
      <span className="text-[1rem] text-black-400 px-[15rem] text-center mt-[4rem]">
        Connect us here!
      </span>
    </div>
  );
}

export default Footer;
