import React from "react";
import Navigation from "@/components/Navigation";
import HeroCard from "@/components/HeroCard";
import Card2 from "@/components/Card2";
import DetailCard from "@/components/DetailCard";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navigation />
      <HeroCard
        title="Loans"
        subtitle="Discover our loans and mortgages tailored to provide capital for you to start your new business venture, own your dream home or upgrade your car."
      />
      <section className="h-full w-full px-3 md:px-[80px] mmd:px-[100px] lg:px-[147.5px] py-[83px] font-sans">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary-blue-1 text-[30px] font-bold text-center mb-[45px] md:mb-0 font-roboto">
            Featured Loans
          </p>
          <p className="max-w-[630px] text-base font-normal text-center font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-between w-full mt-[21px] ">
            <Card2
              title="Personal Home Loans"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card2
              title="Salary Loans"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card2
              title="Automobile Loans"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
          </div>
        </div>
      </section>
      <DetailCard
        image="imgs/happyCouple.svg"
        alt="Happy Couple Shaking Hands"
        title="Apply For a Loan Now"
        subtitle="With so many financial services around, it can be tricky to decide which to pick. You’ll want to factor in how quickly you need access to your money. We are built for the people through delivering excellence."
        btnText="Apply Now"
        pTop="0px"
        pBottom="83px"
      />

      <Footer />
    </>
  );
};

export default page;
