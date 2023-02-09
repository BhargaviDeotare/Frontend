import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#808000] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#2E8B57] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* logo */}
      <img
        src={require("../images/logoo.jpg")}
        alt=""
        className="logo  w-[42px] h-[42px]"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle + ` bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
