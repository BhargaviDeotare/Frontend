import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#3F6D2A] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>The best way to predict the future is to</span>
        <span>
          <b>create it</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="brush" title="Set of 2 bamboo brushes " />
        <Feature icon="earbuds" title="Box of 5o eartips" />
        <Feature icon="cups" title="Resuable cups" />
        <Feature icon="loofah" title="Bamboo loofah" />
        <Feature icon="straw" title="Bamboo Straws" />
      </div>
    </div>
  );
}

export default Experience;
