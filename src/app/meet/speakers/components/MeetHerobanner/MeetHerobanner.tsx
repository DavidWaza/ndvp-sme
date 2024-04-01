import ImageView from "@/app/Components/ImageComponent/ImageView";
import React from "react";
import { TiArrowRight } from "react-icons/ti";
import Tinubu from "../../../../../../public/assets/tinubu.png";
import Sheriff from "../../../../../../public/assets/sheriff.png";
import Abubarkar from "../../../../../../public/assets/abubakar.png";
import Doris from "../../../../../../public/assets/dorris.png";
import Wale from "../../../../../../public/assets/wale.png";
import Jamila from "../../../../../../public/assets/jamila.png";
import Festus from "../../../../../../public/assets/festus.png";
import Uju from "../../../../../../public/assets/uju.png";
import Chiedu from "../../../../../../public/assets/chiedu.png";
import Kolo from "../../../../../../public/assets/kolo.png";
import Bismarck from "../../../../../../public/assets/bismarck.png";
import Olasupo from "../../../../../../public/assets/olasupo.png";
import Ibukun from "../../../../../../public/assets/ibukun.png"
import ObiCubana from "../../../../../../public/assets/obicubana.png"

interface SpeakerProps {
  img: string;
  designation: string;
  name: string;
  host: string;
  title: string;
}

interface MinistersProps {
  img: string;
  name: string;
  title: string;
}

interface KeynoteSpeakerProps {
  img: string;
  name: string;
  title: string;
}

const speakers: SpeakerProps[] = [
  {
    img: Tinubu.src,
    designation: "his excellency",
    name: "Bola Ahmed Tinubu",
    host: "Special Guest of Nigeria",
    title: `President of the Federal Republic of Nigeria`,
  },
  {
    img: Sheriff.src,
    designation: "his excellency, rt.hon (elder)",
    name: "Sheriff F.O Obowevwori",
    host: "Chief Host",
    title: `Governor, Delta State`,
  },
];

const ministers: MinistersProps[] = [
  {
    img: Abubarkar.src,
    name: "Engr. Abubakar Momoh        ",
    title: `Honourable Minister of Niger Delta Affairs 
    Federal Republic of Nigeria       `,
  },
  {
    img: Doris.src,
    name: "Dr. Doris Anite-Uzoka",
    title: `Honourable Minister of Industry,
    Trade & Investment 
    Federal Republic of Nigeria`,
  },
  {
    img: Wale.src,
    name: "Wale Edun",
    title: `Honourable Minister of Finance,
    Federal Republic of Nigeria`,
  },
  {
    img: Jamila.src,
    name: "Dr. Jemila Bio Ibrahim ",
    title: `Honourable Minister of Youth Development
    Federal Republic of Nigeria`,
  },
  {
    img: Festus.src,
    name: "Festus Keyamo SAN, CON",
    title: `Honourable Minister of Aviation and 
    Aerospace Development Federal Republic of Nigeria`,
  },
  {
    img: Uju.src,
    name: "Mrs. Uju Ohanenye Kennedy",
    title: `Honourable Minister of Women Affairs    
    Federal Republic of Nigeria`,
  },
];

const KeynoteSpeakers: KeynoteSpeakerProps[] = [
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
  {
    img: Ibukun.src,
    name: "Mrs. Ibukun Awosika",
    title: `CEO The Chair Centre Group`,
  },
  {
    img: ObiCubana.src,
    name: "Obinna Tochuukwu Iyiegbu (Obi Cubana)",
    title: `Chairman of Cubana Group`,
  },
];

const MeetHerobanner = () => {
  return (
    <div>
      <div className="about-banner py-20 lg:px-20 px-10 lg:text-left text-center">
        <h1 className=" text-2xl lg:text-[60px] font-bold py-5 lg:leading-[70px]">
          Meet our Distinguised <br /> Keynote Speakers
        </h1>
      </div>
      <div className="lg:flex justify-center  gap-5 bg-white py-20">
        {speakers.map((speaker, index) => (
          <div key={index} className="">
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
              <div className="absolute bottom-10">
                <p className="px-6 font-normal uppercase py-3">
                  {speaker.designation}
                </p>
                <h1 className="text-white px-6 text-2xl w-full font-bold">
                  {speaker.name}
                </h1>
                <p className="px-6 font-normal text-[14px]">{speaker.title}</p>
              </div>
            </div>
            <div>
              <p className="py-3 font-bold text-[20px] text-black">
                {speaker.host}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* honourable minister */}
      <div className="bg-white">
        <h1 className=" text-2xl lg:text-[40px] font-bold py-10 lg:leading-[70px] text-black text-center">
          Honourable Ministers on Strategic focus Areas
        </h1>
        <div className="grid grid-cols-4  gap-5 bg-white py-20 px-10 lg:px-20">
          {ministers.map((speaker, index) => (
            <div key={index} className="">
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
                <div className="absolute bottom-10">
                  <h1 className="text-white px-6 text-2xl w-full font-bold">
                    {speaker.name}
                  </h1>
                  <p className="px-6 font-normal text-[14px]">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keynotes speakers */}
      <div className="bg-white">
        <h1 className=" text-2xl lg:text-[40px] font-bold py-10 lg:leading-[70px] text-black text-center">
          Honourable Ministers on Strategic focus Areas
        </h1>
        <div className="grid grid-cols-4  gap-5 bg-white py-20 px-10 lg:px-20">
          {KeynoteSpeakers.map((speaker, index) => (
            <div key={index} className="">
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
                <div className="absolute bottom-10">
                  <h1 className="text-white px-6 text-2xl w-full font-bold">
                    {speaker.name}
                  </h1>
                  <p className="px-6 font-normal text-[14px]">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetHerobanner;
