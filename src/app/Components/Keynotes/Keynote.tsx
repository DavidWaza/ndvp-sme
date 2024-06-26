import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Chiedu from "../../../../public/assets/chiedu.png";
import Kolo from "../../../../public/assets/kolo.png";
import Bismarck from "../../../../public/assets/bismarck.png";
import Olasupo from "../../../../public/assets/olasupo.png";
import ImageView from "../ImageComponent/ImageView";
import { TiArrowRight } from "react-icons/ti";

interface SpeakerProps {
  img: string;
  name: string;
  title: string;
}

const speakers: SpeakerProps[] = [
  {
    img: Chiedu.src,
    name: "Mr Chiedu Ebie",
    title: `Chairman  Niger Delta Development
    Commission (NDDC)`,
  },
  {
    img: Kolo.src,
    name: "Mele Kolo Kyari",
    title: `Group Chief Executive Officer NNPC Ltd`,
  },
  {
    img: Bismarck.src,
    name: "Mr Bismarck Rewane",
    title: `Chairman FCMB Group Plc`,
  },
  {
    img: Olasupo.src,
    name: "Dr. Olasupo Olusi",
    title: `Managing Director and CEO of the
    Bank of Industry,`,
  },
];
const Keynote: React.FC<SpeakerProps> = () => {
  return (
    <div className="bg-white py-10 lg:py-20 lg:px-20 px-10">
      <div className="lg:flex justify-between items-center">
        <h1 className=" text-[30px] lg:text-[40px] font-bold py-5 lg:leading-[40px] text-black">
          Get to know our <br /> Keynote Speakers
        </h1>
        <Link href={"#"}>
          <div className="flex items-center gap-3">
            <p className="text-black font-bold">View all Speakers</p>
            <GoArrowUpRight className="text-black font-bold" />
          </div>
        </Link>
      </div>
      <div className="lg:flex gap-5 ">
        {speakers.map((speaker, index) => (
          <div key={index}>
            <div className="relative my-5 lg:my-0 group">
              <div className="absolute top-5 right-10 ">
                <TiArrowRight
                  size={30}
                  className="group-hover:bg-white group-hover:w-[30px] group-hover:h-[30px] group-hover:text-black rounded-full"
                />
              </div>
              <ImageView
                src={speaker.img}
                width={400}
                height={400}
                className="rounded-[20px] hover:bg-[#1F1D42]"
              />
              <div className="absolute bottom-5">
                <h1 className="text-white px-5  text-2xl w-full font-bold">
                  {speaker.name}
                </h1>
                <p className="px-5 font-medium">{speaker.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keynote;
