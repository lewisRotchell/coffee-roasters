import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <header className="primary-header flex">
      <div>
        <Image
          src="/images/shared/desktop/logo.svg"
          height={26}
          width={236}
          alt={"coffee roasters logo"}
        ></Image>
      </div>
      <nav>
        <ul className="flex">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <a className="uppercase fs-300">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
