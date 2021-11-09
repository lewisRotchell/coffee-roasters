import React from "react";
import Image from "next/image";

interface WhyUsCardsProps {
  image: string;
  title: string;
  description: string;
  key: number;
  truck: boolean;
}

export const WhyUsCards: React.FC<WhyUsCardsProps> = ({
  image,
  title,
  description,
  truck,
}) => {
  if (truck) {
    return (
      <article className="why-us__card ">
        <div>
          <Image src={image} width={72} height={50} alt={title}></Image>
        </div>
        <h3 className={"fw-black fs-500 ff-serif"}>{title}</h3>
        <p>{description}</p>
      </article>
    );
  }
  return (
    <article className="why-us__card">
      <div>
        <Image src={image} width={72} height={72} alt={title}></Image>
      </div>
      <h3 className={"fw-black fs-500 ff-serif fs-700"}>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
