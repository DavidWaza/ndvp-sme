import Herobanner from "./Components/Herobanner/Herobanner";
import VideoComponent from "./Components/VideoComponent/VideoComponent";
import Summit from "./Components/SummitSection/Summit";
import Keynote from "./Components/Keynotes/Keynote";
import RegSection from "./Components/RegisterSection/RegSection";
import Link from "next/link";
import Image from "next/image";
import MobileSummit from "./Components/SummitSection/MobileSummit";

export default function Home() {
  return (
    <main>
      <Herobanner />
      <div className="bg-white py-20 lg:px-20 px-10">
        <p className="text-black font-semibold text-[40px] text-center 2xl:block hidden">
          Welcome to Niger Delta Viewpoint.
        </p>
        <p className="text-black font-bold text-[35px] leading-[40px] text-center 2xl:hidden block">
          Welcome to Niger <br />
          Delta Viewpoint.
        </p>
        <p className="text-black font-normal !chakra py-5 text-[18px] lg:text-[20px] text-center 2xl:block hidden">
          Exposition, Trade Show, Empowerment, Conference & <br /> Networking
          Event.
        </p>
        <p className="text-black font-medium py-5 text-[17px] lg:text-[20px] text-center 2xl:hidden block">
          Exposition, Trade Show, Empowerment, <br /> Conference & Networking
          Event.
        </p>
        <Link href={"#"} className="font-bold text-black text-[18px]">
          <p className="text-center">Learn more</p>
        </Link>
        <div className="hidden 2xl:block">
          <div className="py-10 grid lg:grid-cols-2 gap-10 justify-center ">
            <div>
              {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={900}
              height={700}
            /> */}
              <Image
                src={"/assets/desktop-frame-1.png"}
                alt=""
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <div>
              {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            /> */}
              <Image
                src={"/assets/desktop-frame-2.png"}
                alt=""
                width={300}
                height={300}
                className="w-[75%]"
              />

              {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            /> */}
              <Image
                src={"/assets/desktop-frame-2.png"}
                alt=""
                width={300}
                height={300}
                className="w-[75%] mt-5"
              />
            </div>
          </div>
        </div>

        <div className="block 2xl:hidden">
          <div className="py-10 justify-center space-y-5 ">
            {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={900}
              height={700}
            /> */}
            <Image
              src={"/assets/mobile-frame-1.png"}
              alt=""
              width={300}
              height={300}
              className="w-full"
            />
            {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            /> */}
            <Image
              src={"/assets/mobile-frame-1.png"}
              alt=""
              width={300}
              height={300}
              className="w-full"
            />

            {/* <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            /> */}
            <Image
              src={"/assets/mobile-frame-1.png"}
              alt=""
              width={300}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="hidden lg:block">
          <Summit />
        </div>
        <div className="lg:hidden block">
          <MobileSummit />
        </div>
        <Keynote img={""} name={""} title={""} />
        <RegSection />
      </div>
    </main>
  );
}
