import React from "react";

const Card = ({
  title = "Asset Based Lending",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, s.",
  width = 280,
}) => {
  return (
    <div
      className={`bg-[#F7F7F7] py-[26px] px-[54px] max-w-[${width}px] mb-[45px] md:mb-0`}
    >
      <p className="text-[#373737] text-2xl font-bold font-roboto">{title}</p>
      <p className="text-base font-normal text-[#373737] mb-[26px] max-h-[226px] font-lato">
        {subtitle}
      </p>
      <div className="w-full h-[9px] bg-primary-blue-1"></div>
    </div>
  );
};

export default Card;
