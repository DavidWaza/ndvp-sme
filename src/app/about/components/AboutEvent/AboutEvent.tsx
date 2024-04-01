import VideoComponent from "@/app/Components/VideoComponent/VideoComponent";
import React from "react";

const AboutEvent = () => {
  return (
    <div className="py-20 bg-white px-10 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-black gont-normal text-[18px]">
            The event is poised to promoting financial literacy, Skill
            Acquisition, Apprenticeship and Mentorship amongst the Youths &
            Women of Niger Delta; thereby prompting entrepreneurship.
          </p>
          <br />
          <p className="text-black gont-normal text-[18px]">
            Furthermore, the event seeks to bring Industry Leaders, Private &
            Government Institutions in The Niger Delta to discussing and sharing
            practical frameworks that will aid growth, scalability and
            sustainability for Niger Delta Entrepreneurs.
          </p>
          <br />
          <p className="text-black gont-normal text-[18px]">
            The Two-day event is packed with valuable insights and exclusive
            networking opportunities: business-critical work shops, Exhibitions,
            Empowerments, seminars and presentations from top industry experts,
            speed-networking, entrepreneurs, industry-leading exhibitors,
            startups and much more.
          </p>
        </div>
        <div>
          <VideoComponent
            src={
              "https://www.youtube.com/results?search_query=set+up+typography+reuseable+component+on+next"
            }
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
