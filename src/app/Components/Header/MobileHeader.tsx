"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const NavList = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "#",
    label: "Meet",
    dropdown: [
      { link: "/meet/team", label: "Team" },
      { link: "/meet/partners", label: "Partners" },
    ],
  },
  {
    link: "#",
    label: "Awards",
    dropdown: [
      { link: "/awards/winners", label: "Winners" },
      { link: "/awards/nominees", label: "Nominees" },
    ],
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export default function MobileHeader() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [navToggle, setNavToggle] = useState(false);

  const handleClickDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <nav className="bg-[#07004D] py-10 px-10 lg:px-20 flex justify-between items-center relative">
        <div className="flex items-center gap-10">
          <Logo />
        </div>
        <div>
          <button onClick={handleToggle}>
            {navToggle ? (
              <IoMdClose className="text-white transition-all ease-in" size={25} />
            ) : (
              <RxHamburgerMenu className="text-white transition-all ease-in" size={25} />
            )}
          </button>
        </div>
        {navToggle && (
          <div className="bg-[#07004D] absolute top-[5rem] left-0 w-full transition-all ease-out p-10">
            {NavList.map((navItem, index) => (
              <div key={index} className="text-center py-5">
                <button
                  onClick={() => handleClickDropdown(index)}
                  className="text-white flex justify-center gap-2 items-center font-bold"
                >
                  {navItem.label}
                  {navItem.dropdown ? (
                    <FaAngleDown className="text-white" />
                  ) : null}
                </button>
                {openDropdownIndex === index && navItem.dropdown && (
                  <div className="absolute z-10 left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                    {navItem.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-[#49FF91] py-3 px-10 rounded-lg text-black font-semibold">
              Register to Attend
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
