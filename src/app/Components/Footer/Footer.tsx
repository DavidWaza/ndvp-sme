import Image from "next/image";
import React from "react";
import FooterLogo from "../../../../public/assets/footer-logo.png";
import FooterLogoMobile from "../../../../public/assets/FooterLogo-mobile.png";

import Link from "next/link";

const menuLinks = [
  {
    link: "#",
    label: "About",
  },
  {
    link: "#",
    label: "Sponsors",
  },
  {
    link: "#",
    label: "Exhibitors",
  },
  {
    link: "#",
    label: "Speakers",
  },
  {
    link: "#",
    label: "Awards",
  },
  {
    link: "#",
    label: "Contact",
  },
];
const followLinks = [
  {
    link: "#",
    label: "Instagram",
  },
  {
    link: "#",
    label: "Youtube",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#49FF91] py-[5rem] px-10 lg:px-20">
      <div className="flex justify-between">
        <div className="2xl:block hidden">
          <Image
            src={FooterLogo}
            alt="footer-logo"
            width={800}
            height={800}
            className="w-[40rem]"
          />
        </div>
        <div className="lg:hidden block ">
        <Image
            src={FooterLogoMobile}
            alt="footer-logo"
            width={400}
            height={400}
            className="w-20"
          />
        </div>
        <div className="grid grid-cols-2 gap-[2rem]">
          <div>
            <h1 className="text-[#071113] font-bold text-[16px]">Menu</h1>
            {menuLinks.map((menu, index) => (
              <div key={index}>
                <Link href={menu.link}>
                  <p className="my-3 text-[#071113] font-medium text-xl">
                    {menu.label}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-[#071113] font-bold text-[16px]">Follow</h1>
            {followLinks.map((menu, index) => (
              <div key={index}>
                <Link href={menu.link}>
                  <p className="my-3 text-[#071113] font-medium text-xl">
                    {menu.label}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-[#071113] my-10"></div>
      <div className="flex justify-center gap-10">
        <p className="text-[#071113] font-medium text-xl">Terms of use</p>
        <p className="text-[#071113] font-medium text-xl">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
