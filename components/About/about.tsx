import React from "react";
import AboutCarts from "./aboutCarts";
import Background from "../../images/who-we-are/background.jpg";
import TitleBg from "../../images/pricing/titlebg.svg";
// import TrainersIcon from "../../images/who-we-are/weightlifter.png";
// import ModernIcon from "../../images/who-we-are/equpments.png";
// import LiftIcon from "../../images/who-we-are/gym.png";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import GirlWind from "../../images/who-we-are/wind.png";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <section className="relative">
      {/* WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-row gap-2">
          <div className="relative w-full">

            {/* ABOUT CARDS */}
            <div className="flex flex-col lg:flex-row md:flex-col lg:gap-8 md:gap-0 gap-32 lg:-mt-20 md:-mt-0 m-20 left-0 md:p-6 p-12">
              <AboutCarts />
            </div>

            {/* MAIN CONTENT */}
            <div className="lg:flex lg:flex-row xl:justify-around lg:justify-center xl:mx-0 lg:top-96 absolute xl:gap-9 lg:gap-16 md:top-[89rem] top-[149rem] md:items-center">
              <div className="lg:w-2/5 md:w-3/4 lg:mx-auto mx-44">
                <div className="relative">
                  <p className="text-white font-semibold relative md:text-lg text-4xl uppercase lg:text-sm z-10 md:p-0 p-5 md:ml-[23rem] lg:-top-2 lg:ml-52 ml-[18rem]">
                    who we are
                  </p>

                  <Image
                    src={TitleBg}
                    alt="text_bg"
                    className="md:w-64 w-[35rem] lg:w-44 absolute -top-3 md:ml-72 ml-40 lg:ml-40"
                  />

                  <h2 className="md:text-4xl font-bold md:mb-4 text-6xl md:mt-9 mt-24 text-center lg:text-4xl">
                    Take Your Health And Body To Next Level
                  </h2>

                  <p className="text-[#646464] md:text-lg text-4xl md:mt-0 mt-12 text-center md:p-0 p-9 lg:text-sm">
                    Take your health and body to the next level with our
                    comprehensive program designed to help you reach your fitness
                    goals.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="md:flex md:flex-row flex flex-col mt-6 mb-[7rem] gap-[2px] md:ml-32 lg:ml-0">
                  {/* cards unchanged */}
                </div>

                {/* CTA */}
                <div className="bg-black/80 lg:w-44 md:w-52 w-80 text-center lg:text-sm md:text-lg text-4xl text-white font-[600] md:p-4 p-7 hover:bg-secondary transition duration-300 rounded-md lg:ml-40 md:ml-80 ml-[18rem] -mt-12 md:-mt-28 lg:-mt-0">
                  <Link href="/gallery">TAKE A TOUR</Link>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-2/5 hidden lg:block pt-20">
                <Image
                  src={GirlRunning}
                  alt="girl_running"
                  className="xl:w-[30rem] lg:w-[20rem] absolute xl:h-[32rem] lg:h-[22rem] xl:ml-8 lg:ml-10 mt-5"
                />

                <div className="flex flex-row-reverse gap-24">
                  <Image src={GirlRedBg} alt="bg-red" className="xl:h-[32rem] lg:h-[22rem] mt-4" />
                  {/* <Image src={GirlWind} alt="bg-wind" className="absolute xl:top-64 lg:top-72 xl:right-32 lg:right-32 w-20" /> */}
                  <Image src={GirlText} alt="bg-text" className="w-auto lg:hidden xl:block" />
                </div>
              </div>
            </div>

            {/* BACKGROUND */}
            <Image
              src={Background}
              alt="home_image"
              className="w-full lg:min-h-[40rem] md:min-h-[25rem] min-h-[80rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;

