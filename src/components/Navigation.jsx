"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="px-0 md:px-[97.58px] w-full bg-[#171717] border-b border-white">
      <nav className="justify-between items-center px-[35px] hidden md:flex bg-[#171717]  pt-[36.96px] pb-[12.04px] w-full">
        <div className="flex justify-center items-center w-[92px] h-[39px] cursor-pointer">
          <Link href="/">
            <Image src="imgs/logo.svg" alt="logo" width={92} height={39} />
          </Link>
        </div>
        <ul className="flex items-center text-[13px] font-normal text-white">
          <li className="inline-block p-[10px] mr-[10px] hover:text-primary-blue-2 cursor-pointer">
            <Link
              href="/"
              className={pathname === "/" ? "text-primary-blue-2" : ""}
            >
              Home
            </Link>
          </li>
          <li className="inline-block p-[10px] mr-[10px] hover:text-primary-blue-2 cursor-pointer">
            <Link
              href="/about"
              className={pathname === "/about" ? "text-primary-blue-2" : ""}
            >
              About Us
            </Link>
          </li>
          <li className="inline-block p-[10px] mr-[10px] hover:text-primary-blue-2 cursor-pointer">
            <Link
              className={pathname === "/loans" ? "text-primary-blue-2" : ""}
              href="/loans"
            >
              Loans
            </Link>
          </li>
          <li className="inline-block p-[10px] mr-[10px] hover:text-primary-blue-2 cursor-pointer">
            <Link
              href="/savings"
              className={pathname === "/savings" ? "text-primary-blue-2" : ""}
            >
              Savings
            </Link>
          </li>
          <li className="inline-block p-[10px] mr-[10px] hover:text-primary-blue-2 cursor-pointer">
            <Link
              href="/"
              // className={pathname === "/" ? "text-primary-blue-2" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="bg-[#0D417F] p-5 text-[13px] font-bold text-white cursor-pointer">
          Online Banking
        </button>
      </nav>
      <>
        <nav className="flex justify-between items-center px-[19px] md:hidden py-[9.5px] bg-[#171717] fixed w-full">
          <div className="flex justify-center items-center w-[92px] h-[39px] cursor-pointer">
            <Image src="imgs/logo.svg" alt="logo" width={92} height={39} />
          </div>
          <div
            className="flex justify-center items-center w-[22px] h-[15px] cursor-pointer"
            onClick={toggleMenu}
          >
            {!showMenu ? (
              <Image
                src="imgs/hamburger.svg"
                alt="logo"
                width={22}
                height={15}
              />
            ) : (
              <Image src="imgs/times.svg" alt="logo" width={22} height={15} />
            )}
          </div>
        </nav>
        {showMenu && (
          <div className="bg-gray-700 h-full w-full fixed mt-[3.6rem] block md:hidden">
            <div className="flex flex-col justify-between items-center">
              <ul className="flex flex-col justify-between items-center text-sm font-normal text-white">
                <li className="inline-block p-8 hover:text-primary-blue-2 cursor-pointer">
                  <Link
                    href="/"
                    className={pathname === "/" ? "text-primary-blue-2" : ""}
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="inline-block p-8 hover:text-primary-blue-2 cursor-pointer">
                  <Link
                    href="/about"
                    className={
                      pathname === "/about" ? "text-primary-blue-2" : ""
                    }
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li
                  className="inline-block p-8 hover:text-primary-blue-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <Link
                    href="/loans"
                    className={pathname === "/" ? "text-primary-blue-2" : ""}
                    onClick={toggleMenu}
                  >
                    Loans
                  </Link>
                </li>
                <li className="inline-block p-8 hover:text-primary-blue-2 cursor-pointer">
                  <Link
                    href="/savings"
                    className={
                      pathname === "/savings" ? "text-primary-blue-2" : ""
                    }
                    onClick={toggleMenu}
                  >
                    Savings
                  </Link>
                </li>
                <li className="inline-block p-8 hover:text-primary-blue-2 cursor-pointer">
                  <Link
                    href="/"
                    // className={pathname === "/" ? "text-primary-blue-2" : ""}
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button
                className="bg-[#0D417F] m-8 p-5 text-[13px] font-bold text-white cursor-pointer"
                onClick={toggleMenu}
              >
                Online Banking
              </button>
            </div>
          </div>
        )}
      </>
    </header>
  );
};

export default Navigation;
