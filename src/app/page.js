import DetailCard from "@/components/DetailCard";
import HomeNav from "@/components/HomeNav";
import Image from "next/image";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <section className="w-full h-full pb-[121px] sm:pb-0 sm:h-screen bg-hero-bg bg-cover bg-no-repeat flex flex-col font-sans">
        <header className="py-0 md:py-[45px] px-0 md:px-[98px] w-full">
          <HomeNav />
        </header>
        <main className="h-full text-white px-[22px] md:pl-[103px] flex items-center justify-center md:justify-start">
          <div className="max-w-[608px]">
            <p className="text-[32px] sm:text-[40px] font-bold text-center md:text-right">
              Make Every Transaction Count
            </p>
            <div className="md:max-w-[367px] w-full mt-6 mb-11">
              <p className="text-base font-normal text-center md:text-left font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-primary-blue-1 p-5 text-white text-base font-medium mr-[15px] ">
                Get Started
              </button>
              <button className="bg-transparent border border-white p-5 text-white text-base font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </section>
      <section className=" w-full h-full px-3 md:px-[116px] flex justify-center font-sans">
        <div className="flex bg-[#FAFAFA] md:flex-row flex-col-reverse items-center md:items-start">
          <div className="max-w-[457px] py-[50px] px-[30px]">
            <p className="text-[#373737] text-[32px] font-bold mb-[33px] text-center md:text-left capitalize font-lato">
              Bank on the go
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
      <DetailCard />
      <section className="h-full w-full px-3 md:px-[80px] mmd:px-[100px] lg:px-[147.5px] py-[83px] font-sans">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary-blue-1 text-[30px] font-bold text-center mb-[45px] md:mb-0 font-roboto">
            Always Supporting Buinesses
          </p>
          <p className="max-w-[630px] text-base font-normal text-center font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-between w-full mt-[21px]">
            <Card
              title="Asset Based Lending"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card
              title="Property Development"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
            <Card
              title="Property Development"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, s."
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full  font-sans px-3 md:px-[108px] pb-[84px]">
        <div className="bg-transparent md:bg-bg-2 bg-cover bg-no-repeat h-full w-full flex flex-col md:flex-row items-center justify-between">
          <div className="pb-[45px] md:py-[104px] pl-[30px] w-full md:w-[45%]">
            <div className="w-full md:max-w-[410px]">
              <p className="text-black md:text-white text-center md:text-left font-roboto text-[32px] mb-[17px] font-bold">
                Looking to save for the future?
              </p>
              <p className="ext-black md:text-white  text-center md:text-left font-lato text-[16px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pl-[31px] w-full md:w-[55%]">
            <div className="border border-black md:border-white max-w-[189px] max-h-[169px] p-6 text-black md:text-white flex flex-col justify-center items-center mr-0 mb-[47.53px] md:mb-0 md:mr-[28px]">
              <p className="font-roboto font-bold text-2xl mb-4 text-center">
                Access Savings
              </p>
              <button className="p-4 font-base text-white bg-primary-blue-1 font-medium">
                View More
              </button>
            </div>
            <div className="border border-black md:border-white max-w-[189px] max-h-[169px] p-6 text-black md:text-white flex flex-col justify-center items-center">
              <p className="font-roboto font-bold text-2xl mb-4 text-center">
                Online Banking
              </p>
              <button className="p-4 font-base text-white bg-primary-blue-1 font-medium">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full w-full px-3 md:px-[100.5px] lg:px-[110.5px] pb-[83px] font-sans">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary-blue-1 text-[30px] font-bold text-center mb-[45px] md:mb-0 font-roboto">
            Existing Perks for Customers
          </p>
          <p className="max-w-[630px] text-base font-normal text-center font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-between w-full mt-[21px] ">
            <div className="bg-white pt-[28px] pb-[24px] px-[38px] max-w-[209px] mb-[45px] md:mb-0">
              <Image src="imgs/file.svg" alt="file" width={42} height={42} />
              <p className="font-roboto font-bold text-base mb-[15px]">
                Manage your account online
              </p>
              <div className="w-full h-[9px] bg-primary-blue-1"></div>
            </div>
            <div className="bg-white pt-[28px] pb-[24px] px-[38px] max-w-[209px] mb-[45px] md:mb-0">
              <Image src="imgs/chart.svg" alt="file" width={42} height={42} />
              <p className="font-roboto font-bold text-base mb-[15px]">
                Manage your account online
              </p>
              <div className="w-full h-[9px] bg-primary-blue-1"></div>
            </div>
            <div className="bg-white pt-[28px] pb-[24px] px-[38px] max-w-[209px] mb-[45px] md:mb-0">
              <Image src="imgs/target.svg" alt="file" width={42} height={42} />
              <p className="font-roboto font-bold text-base mb-[15px]">
                Manage your account online
              </p>
              <div className="w-full h-[9px] bg-primary-blue-1"></div>
            </div>
            <div className="bg-white pt-[28px] pb-[24px] px-[38px] max-w-[209px] mb-[45px] md:mb-0">
              <Image
                src="imgs/laptop.svg"
                alt="laptop icon"
                width={42}
                height={42}
              />
              <p className="font-roboto font-bold text-base mb-[15px]">
                Manage your account online
              </p>
              <div className="w-full h-[9px] bg-primary-blue-1"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
