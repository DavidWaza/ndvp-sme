import React from "react";
import Image from "next/image";
import TedTalks from "../../../../../public/assets/ted-talks.png";
import Seminars from "../../../../../public/assets/seminar.png";
import ELearn from "../../../../../public/assets/e-learn.png";
import Panel from "../../../../../public/assets/panel.png";
import Awards from "../../../../../public/assets/awards.png";
interface EventProps {
  img: string;
  event: string;
}

const events: EventProps[] = [
  {
    img: TedTalks.src,
    event: `Ted Talks`,
  },
  {
    img: Seminars.src,
    event: `Seminars`,
  },
  {
    img: ELearn.src,
    event: `Experimental Learning`,
  },
  {
    img: Panel.src,
    event: `panel discussion`,
  },
  {
    img: Awards.src,
    event: `Awards/exhibition/empowerment`,
  },
];
const EventActivity = () => {
  return (
    <div className="px-10 lg:px-20 bg-white">
      <h1 className=" text-2xl lg:text-[40px] font-bold lg:leading-[40px] text-black text-center py-20">
        Event Activities
      </h1>
      <div className="grid lg:grid-cols-5 gap-10">
        {events.map((event, index) => (
          <div key={index}>
            <Image src={event.img} width={300} height={300} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventActivity;
