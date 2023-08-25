import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="h-full w-full bg-[#122B48] pt-[42px] px-3 md:px-[104px] font-lato">
      <div className="w-full flex flex-col md:flex-row justify-between items-center font-sans pb-[47.5px]">
        <div className="flex justify-center items-center w-[92px] h-[39px] cursor-pointer mb-6 md:mb-0">
          <Image src="imgs/logo.svg" alt="logo" width={92} height={39} />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
          <div className="pb-[10.5px] mb-6 md:mb-0">
            <p className="text-base font-bold font-sans text-white">
              Quick Links
            </p>
            <hr></hr>
          </div>
          <ul className="flex flex-col justify-center md:flex-row items-center md:justify-start text-[13px] font-normal text-white">
            <li className="inline-block md:py-[10px] md:pr-[10px] mr-0 mb-6 md:mb-0 md:mr-[10px] hover:text-primary-blue-2 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block p-[10px] mr-0 mb-6 md:mb-0 md:mr-[10px] hover:text-primary-blue-2 cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="inline-block p-[10px] mr-0 mb-6 md:mb-0 md:mr-[10px] hover:text-primary-blue-2 cursor-pointer">
              <Link href="/loans">Loans</Link>
            </li>
            <li className="inline-block p-[10px] mr-0 mb-6 md:mb-0 md:mr-[10px] hover:text-primary-blue-2 cursor-pointer">
              <Link href="/savings">Savings</Link>
            </li>
            <li className="inline-block p-[10px] mr-0 mb-6 md:mb-0 md:mr-[10px] hover:text-primary-blue-2 cursor-pointer">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="bg-[#0D417F] p-5 text-[13px] font-bold text-white cursor-pointer">
          Online Banking
        </button>
      </div>
      <div className="px-[51.75px] md:px-0 w-full">
        <hr></hr>
      </div>
      <p className="text-center text-white py-[10.5px] font-semibold text-base font-lato">
        © Copyrights 2023 Logo Inc. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
