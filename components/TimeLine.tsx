import React from "react";
import { howItWorksData } from "../data/how-it-works-data";
import { TimeLineCard } from "./TimelineCard";

export const TimeLine: React.FC = ({}) => {
  return (
    <div>
      <div className="line"></div>
      <div className=" timeline__grid ">
        {howItWorksData.map((data, index) => (
          <TimeLineCard
            key={index}
            number={data.number}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};
