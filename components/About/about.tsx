import React from "react";
import AboutCarts from "./aboutCarts";
import Background from "../../images/who-we-are/background.jpg";
import TitleBg from "../../images/pricing/titlebg.svg";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={Background}
          alt="about background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-row gap-2">
          <div className="relative w-full">
            {/* ABOUT CARDS */}
            <div className="flex flex-col lg:flex-row md:flex-col lg:gap-8 md:gap-0 gap-11 lg:-mt-20 md:-mt-0  left-0 md:p-6 p-6">
              <AboutCarts />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative lg:flex lg:flex-row xl:justify-around lg:justify-center xl:mx-0 absolute xl:gap-9 lg:gap-16 md:items-center pb-9">
              <div className="lg:w-2/5 md:w-3/4 mx-auto flex flex-col mt-12">
                <div className=" text-center">
                 <div className="relative inline-block mb-5 sm:mb-6">
            <Image src={TitleBg} alt="" className="w-[180px] sm:w-[200px]" />
            <p className="absolute inset-0 flex items-center pl-6 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
              who we are
            </p>
          </div>
                  <h2 className="md:text-4xl font-bold md:mb-4 text-3xl md:mt-9 text-center lg:text-4xl p-2">
                    Take Your Health And Body To Next Level
                  </h2>

                  <p className="text-[#646464] md:text-lg text-[17px] text-center md:p-0 p-9 lg:text-[17px]">
                    Take your health and body to the next level with our
                    comprehensive program designed to help you reach your
                    fitness goals.
                  </p>
                </div>

                {/* FEATURES */}

                <Link href="/gallery">
                  {" "}
                  <div className="bg-black/80 lg:w-44 md:w-52 w-44 text-center lg:text-sm md:text-lg text-md text-white font-semibold md:p-3 p-3 hover:bg-red-500 transition duration-300 rounded-md mx-auto md:mt-8 mt-2">
                    TAKE A TOUR
                  </div>
                </Link>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-2/5 hidden lg:block pt-20 mb-11 mr-10">
                <Image
                  src={GirlRunning}
                  alt="girl_running"
                  className="xl:w-[30rem] lg:w-[24rem] absolute xl:h-[32rem] lg:h-[22rem] xl:ml-8 lg:ml-10 mt-5"
                />

                <div className="flex flex-row-reverse gap-24">
                  <Image
                    src={GirlRedBg}
                    alt="bg-red"
                    className="xl:h-[32rem] lg:h-[22rem] mt-4"
                  />
                  <Image
                    src={GirlText}
                    alt="bg-text"
                    className="w-auto lg:hidden xl:block"
                  />
                </div>
              </div>
            </div>

            {/* BACKGROUND */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
