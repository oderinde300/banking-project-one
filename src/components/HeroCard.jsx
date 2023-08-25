import React from "react";
import Image from "next/image";

const HeroCard = ({ title, subtitle }) => {
  return (
    <section className="mt-[3.6rem] md:mt-0">
      <div className="w-full bg-pages-bg bg-cover bg-no-repeat h-[308px] flex items-center">
        <div className="flex items-center justify-center w-full md:justify-start">
          <div className=" text-white h-full ml-0 md:ml-[115px]">
            <p className="text-[32px] sm:text-[40px] font-bold text-center md:text-left text-white">
              {title}
            </p>
            <div className="md:max-w-[367px] w-full mt-6 mb-11">
              <p className="font-lato text-base font-normal text-center md:text-left text-white">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
