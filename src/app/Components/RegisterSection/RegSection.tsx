import React from "react";

const RegSection = () => {
  return (
    <div className="regsection-bg !py-[4rem]">
      <h1 className=" text-2xl lg:text-[60px] font-bold  lg:leading-[40px] text-white text-center ">
        Register Now
      </h1>
      <p className="font-semibold text-white text-center py-10 text-[40px]">
        You don’t want to miss this summit
      </p>
      <div className="py-10 flex justify-center">
        <button className="bg-[#49FF91] py-3 px-10 rounded-lg text-black font-semibold">
          Register to Attend
        </button>
      </div>
    </div>
  );
};

export default RegSection;
