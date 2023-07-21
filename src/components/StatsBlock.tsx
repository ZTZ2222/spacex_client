import React from "react";

interface StatsItemProps {
  id?: number;
  top_text: string;
  center_text: string;
  bottom_text: string;
  direction?: string;
}

const StatsBlock: React.FC<StatsItemProps> = ({
  direction,
  top_text,
  center_text,
  bottom_text,
}) => {
  return (
    <div
      className={`${direction} font-museo-sans-700 flex cursor-pointer flex-col justify-center from-transparent from-50% to-gray-500 to-[300%] p-3 text-center hover:to-white`}
    >
      <p className="mb-3 text-xs uppercase text-lime-100 md:text-sm xl:text-base">
        {top_text}
      </p>
      <h1 className="text-2xl font-medium uppercase text-white md:text-5xl xl:text-8xl">
        {center_text}
      </h1>
      <p className="text-xs uppercase text-lime-100 md:text-sm xl:text-base">
        {bottom_text}
      </p>
    </div>
  );
};

export default StatsBlock;
