import React from "react";

const ContactHero = () => {
  return (
    <div className="contact-hero py-5 lg:px-20 px-10 lg:text-left !h-[70vh]">
      <h1 className=" text-2xl lg:text-[60px] font-bold py-5 lg:leading-[70px]">
        Need help? <br /> Contact us
      </h1>
      <p className="text-white text-[18px]">
        Have a question? Call us: 08023457867 and <br /> email
        support@ndvp@gmail.com or click the button below
      </p>
      <br />
      <p className="text-white text-[18px]">
        It may take some time to reply to your request but we <br /> will
        definitely respond as soon as we can. thank you for <br /> your patience
      </p>
      <div className="py-10">
        <button className="bg-[#49FF91] py-3 px-10 rounded-lg text-black font-semibold">
          Email Support
        </button>
      </div>
    </div>
  );
};

export default ContactHero;
