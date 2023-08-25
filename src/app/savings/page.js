import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroCard from "@/components/HeroCard";
import Card from "@/components/Card";
import DetailCard from "@/components/DetailCard";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navigation />
      <HeroCard
        title="Your Personal Savings account"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <section className="h-full w-full px-3 md:px-[80px] mmd:px-[100px] lg:px-[147.5px] py-[83px] font-sans">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary-blue-1 text-[30px] font-bold text-center mb-[45px] md:mb-0 font-roboto">
            Always Supporting Buinesses
          </p>
          <p className="max-w-[630px] text-base font-normal text-center font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-between w-full mt-[21px] ">
            <Card
              title="Open a savings account"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card
              title="Manage your account"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card
              title="Enjoy Quality Banking"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
          </div>
        </div>
      </section>
      <DetailCard
        image="imgs/womanPiggybank.svg"
        alt="Woman with coins saving in white piggyBank"
        title="We Know what you need"
        subtitle="With so many financial services around, it can be tricky to decide which to pick. You’ll want to factor in how quickly you need access to your money. We are built for the people through delivering excellence."
        btnText="Get Started"
        pTop="0px"
      />
      <section className=" w-full h-full px-3 md:px-[116px] flex justify-center font-sans">
        <div className="flex bg-[#F7F7F7] md:flex-row flex-col-reverse items-center md:items-start my-[83px]">
          <div className="max-w-[457px] py-[50px] px-[30px]">
            <p className="text-[#373737] text-[32px] font-bold mb-[33px] text-center md:text-left capitalize font-lato">
              About Us
            </p>
            <p className="text-[#1B1B1B] text-base font-normal mb-[33px] text-center md:text-left font-lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <button className="p-4 text-white text-base font-normal bg-primary-blue-1">
                Get Started
              </button>
            </div>
          </div>
          <Image
            src="imgs/holdingCard.svg"
            alt="holding card"
            width={547}
            height={360}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
