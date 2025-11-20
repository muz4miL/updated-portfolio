import React from "react";

const SectionHeader = ({ number, title }) => {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-teal font-mono text-xl">{number}.</span>
      <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
        {title}
      </h2>
      <div className="h-[1px] bg-lightestNavy flex-grow max-w-xs"></div>
    </div>
  );
};

export default SectionHeader;
