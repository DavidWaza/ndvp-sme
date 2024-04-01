"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleClickDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-[#07004D] py-10 px-10 lg:px-20 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Logo />
          {NavList.map((navItem, index) => (
            <div key={index} className="relative inline-block">
              <Link href={navItem.link}>
                <button
                  onClick={() => handleClickDropdown(index)}
                  className={` flex items-center gap-3 ${
                    pathname === navItem.link ? "text-[#49FF91]" : "text-white"
                  }`}
                >
                  {navItem.label}
                  {navItem.dropdown ? (
                    <FaAngleDown className="text-white" />
                  ) : null}
                </button>
              </Link>

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
        </div>
        <div>
          <button className="bg-[#49FF91] py-3 px-10 rounded-lg text-black font-semibold">
            Register to Attend
          </button>
        </div>
      </nav>
    </>
  );
}
