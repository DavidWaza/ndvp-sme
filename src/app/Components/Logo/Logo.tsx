import Image from "next/image";
import React from "react";
import LogoImage from "../../../../public/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={LogoImage}
          width={300}
          height={300}
          alt="logo"
          className="w-20"
        />
      </Link>
    </div>
  );
};

export default Logo;
