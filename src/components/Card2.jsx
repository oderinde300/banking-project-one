import React from "react";

const Card2 = ({
  title = "Asset Based Lending",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, s.",
  width = 245,
}) => {
  return (
    <div
      className={`bg-primary-blue-1 py-[26px] px-[54px] max-w-[${width}px] mb-[45px] md:mb-0`}
    >
      <p className="text-white text-2xl font-bold font-roboto">{title}</p>
      <p className="text-base font-normal text-[#FBFBFB] mb-[26px] max-h-[226px] font-lato">
        {subtitle}
      </p>
      <div className="w-full h-[9px] bg-white"></div>
    </div>
  );
};

export default Card2;
