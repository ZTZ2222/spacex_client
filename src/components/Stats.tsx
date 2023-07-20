"use client";

import React, { useEffect, useState } from "react";

interface StatsItemsData {
  top_text: string;
  center_text: string;
  bottom_text: string;
  direction: string;
}

const Stats: React.FC = () => {
  const [statsItems, setStatsItems] = useState<StatsItemsData[]>([]);

  useEffect(() => {
    const fetchStatsItems = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/stats-content/`,
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
      {statsItems.map((stats, index) => (
        <div
          key={index}
          className={`${stats.direction} font-museo-sans-700 flex cursor-pointer flex-col justify-center from-transparent from-50% to-gray-500 to-[300%] p-3 text-center hover:to-white`}
        >
          <p className="mb-3 text-xs uppercase text-lime-100 md:text-sm xl:text-base">
            {stats.top_text}
          </p>
          <h1 className="text-2xl font-medium uppercase text-white md:text-5xl xl:text-8xl">
            {stats.center_text}
          </h1>
          <p className="text-xs uppercase text-lime-100 md:text-sm xl:text-base">
            {stats.bottom_text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
