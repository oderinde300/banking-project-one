import React from "react";
import Image from "next/image";

const DetailCard = ({
  image = "imgs/ladyImg.svg",
  alt = "lady holding card",
  title = "Who are We",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  btnText = "Learn more",
  pTop = "83px",
  pBottom = "0px",
}) => {
  return (
    <section
      className={`h-full w-full pt-[${pTop}] pb-[${pBottom}] flex flex-col items-center md:flex-row px-3 md:px-0 font-sans`}
    >
      <Image
        src={image}
        alt={alt}
        width={476}
        height={464}
        className="mb-[50px] md:mb-0"
      />
      <div className="bg-primary-blue-1 py-[50px] px-3 md:px-[50px] lg:px-[113px] w-full h-full md:max-h-[330px]">
        <p className="text-white text-2xl md:text-[32px] font-bold mb-[33px] text-center md:text-left font-lato ">
          {title}
        </p>
        <p className="text-white text-base font-light mb-[33px] text-center md:text-left font-lato w-full md:max-w-[455px]">
          {subtitle}
        </p>
        <div className="flex justify-center items-center md:justify-start">
          <button className="capitalize text-primary-blue-1 p-4 text-base font-normal bg-white">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
