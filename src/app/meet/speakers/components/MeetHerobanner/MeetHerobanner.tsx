import React from "react";
import Speakers from "../Speakers/Speakers";

const MeetHerobanner = () => {
  return (
    <div>
      <div className="about-banner py-20 lg:px-20 px-10">
        <h1 className=" text-2xl lg:text-[60px] font-bold py-5 lg:leading-[70px] 2xl:block hidden">
          Meet our Distinguised <br /> Keynote Speakers
        </h1>
        <h1 className="text-[33px] font-bold py-5 lg:leading-[70px] 2xl:hidden block">
          Meet our <br /> Distinguised <br />
          Keynote Speakers
        </h1>
      </div>
      <Speakers />
    </div>
  );
};

export default MeetHerobanner;
