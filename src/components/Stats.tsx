"use client";

import React, { useEffect, useState } from "react";
import StatsBlock from "./StatsBlock";

interface StatsItemProps {
  id?: number;
  top_text: string;
  center_text: string;
  bottom_text: string;
  direction: string;
}

const Stats: React.FC = () => {
  const [statsItems, setStatsItems] = useState<StatsItemProps[]>([]);

  useEffect(() => {
    const fetchStatsItems = async () => {
      try {
        const response = await fetch(
          "https://ztz2222.pythonanywhere.com/api/stats-content/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stats items");
        }
        const data = await response.json();

        setStatsItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStatsItems();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      {statsItems.map((data) => (
        <StatsBlock
          key={data.id}
          direction={data.direction}
          top_text={data.top_text}
          bottom_text={data.bottom_text}
          center_text={data.center_text}
        />
      ))}
    </div>
  );
};

export default Stats;
