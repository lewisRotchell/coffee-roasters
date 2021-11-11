import React from "react";
import Image from "next/image";

interface HowItWorksCardProps {
  number: string;
  title: string;
  description: string;
  key: number;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="how-it-works__card">
      <span>{number}</span>
      <h3 className={"fw-black fs-500 ff-serif"}>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
