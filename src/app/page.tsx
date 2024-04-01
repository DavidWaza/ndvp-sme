import Herobanner from "./Components/Herobanner/Herobanner";
import VideoComponent from "./Components/VideoComponent/VideoComponent";
import Summit from "./Components/SummitSection/Summit";
import Keynote from "./Components/Keynotes/Keynote";
import RegSection from "./Components/RegisterSection/RegSection";

export default function Home() {
  return (
    <main>
      <Herobanner />
      <div className="bg-white py-20 lg:px-20 px-10">
        <p className="text-black font-bold text-[20px] lg:text-[40px] text-center">
          Welcome to Niger Delta Viewoint.
        </p>
        <p className="text-black font-medium text-[18px] lg:text-[20px] text-center">
          Exposition, Trade Show, Empowerment, Conference & <br /> Networking
          Event.
        </p>
        <div className="py-10 grid lg:grid-cols-2 gap-10 justify-center">
          <div>
            <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={900}
              height={700}
            />
          </div>
          <div>
            <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            />
            <VideoComponent
              src={
                "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
              }
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="">
        <Summit />
        <Keynote img={""} name={""} title={""} />
        <RegSection />
      </div>
    </main>
  );
}
