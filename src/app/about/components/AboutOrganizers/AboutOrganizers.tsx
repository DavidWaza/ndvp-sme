import VideoComponent from "@/app/Components/VideoComponent/VideoComponent";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const AboutOrganizers = () => {
  return (
    <div className="bg-white px-10 lg:px-20 py-32">
      <div className="grid lg:grid-cols-2 gap-10 ">
        <div className="lg:order-1 order-2">
          <VideoComponent
            src={
              "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
            }
            width={700}
            height={700}
          />
        </div>

        <div>
          <h1 className="text-black pb-5 font-bold text-[20px]">
            Kudimata Nigeria Limited
          </h1>
          <h1 className="text-black pb-5 text-[30px] lg:text-[50px] font-bold leading-[40px]">
            About Organizer
          </h1>
          <p className="text-black text-[20px]">
            KUDIMATA NIG LTD, is a fun hybrid Educational Financial Community
            (FINCOM) driven towards providing Basic Financial Education,
            Advisory, Business Support, Internship, Mentorship, Empowerment,
            Training & Development to individuals and small scale businesses in
            the interest of economic growth and long-term viability.
          </p>
          <Link href={"#"}>
            <div className="flex items-center gap-3 py-5">
              <p className="text-black font-bold">Learn more</p>
              <GoArrowUpRight className="text-black font-bold" />
            </div>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutOrganizers;
