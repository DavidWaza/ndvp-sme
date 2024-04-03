import React from "react";
import CountdownTimer from "../Countdown/Countdown";

const Herobanner = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <div>
      <div className="hero-banner py-20 lg:px-20 px-10 text-left">
        <div className="2xl:block hidden">
          <p className="uppercase lg:text-2xl text-white font-medium">
            the dome asaba | june 28th - 29th 2024
          </p>
        </div>
        <div className="2xl:hidden block">
          <p className="uppercase lg:text-2xl text-white font-medium">
            the dome asaba | <br /> june 28th - 29th 2024
          </p>
        </div>
        <div className="2xl:block hidden">
          <h1 className=" text-[35px] lg:text-[60px] font-bold py-5 lg:leading-[70px]">
            NDVP-SME: A Journey <br /> to self-Actualization
          </h1>
        </div>
        <div className="2xl:hidden block">
          <h1 className=" text-[35px] lg:text-[60px] font-bold py-5 lg:leading-[70px]">
            NDVP-SME: <br /> A Journey to <br /> self-Actualization
          </h1>
        </div>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="py-10">
          <button className="bg-[#49FF91] py-3 px-10 rounded-lg text-black font-semibold">
            Register to Attend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
