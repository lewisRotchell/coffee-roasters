import React from "react";
import Link from "next/link";

interface ButtonProps {
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  if (type === "link") {
    return (
      <Link href="/">
        <a className="btn fw-black">{children}</a>
      </Link>
    );
  } else return <button>{children}</button>;
};
