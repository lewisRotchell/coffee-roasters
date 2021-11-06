import React from "react";
import Image from "next/image";

interface HeaderProps {}

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Create Your Plan",
    link: "/",
  },
];

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Image
        src="/images/shared/desktop/logo.svg"
        height={26}
        width={236}
        alt={"coffee roasters logo"}
      ></Image>
    </header>
  );
};
