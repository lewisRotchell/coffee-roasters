import React from "react";

interface TimeLineCardProps {
  number: string;
  title: string;
  description: string;
  key: number;
}

export const TimeLineCard: React.FC<TimeLineCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <article className="timeline__card">
      <span>{number}</span>
      <h3 className="fw-black fs-500 ff-serif">{title}</h3>
      <p>{description}</p>
    </article>
  );
};
