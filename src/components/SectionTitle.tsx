import React from "react";

interface TitleProps {
  title: string;
}

const SectionTitle: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-gradient font-museo-sans-700 mb-8 overflow-hidden bg-gradient-to-r from-white from-[17%] to-orange-600 to-[60%] px-2 text-center text-3xl text-transparent md:text-5xl lg:text-6xl xl:text-7xl">
      {title}
    </h1>
  );
};

export default SectionTitle;
