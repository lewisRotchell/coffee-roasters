import React from "react";
import Image from "next/image";

interface CoffeeCollectionCardProps {
  image: string;
  title: string;
  description: string;
  key: number;
}

export const CoffeeCollectionCard: React.FC<CoffeeCollectionCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <article className="coffee-collection-card">
      <Image src={image} width={255} height={193} alt={title}></Image>

      <div>
        <h3 className={"fw-black fs-500 ff-serif"}>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};
