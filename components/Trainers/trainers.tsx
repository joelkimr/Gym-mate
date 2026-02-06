import React from "react";
import Trainer1 from "../../images/trainers/trainer1.png";
import Trainer2 from "../../images/trainers/trainer2.png";
import Trainer3 from "../../images/trainers/trainer3.png";
import TrainerBg from "../../images/trainers/trainer-bg.png";
import Shape from "../../images/trainers/shape.png";
import Image from "next/image";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Trainers() {
  const trainers = [
    { img: Trainer1, name: "John Lewis", job: "Crossfit Trainer" },
    { img: Trainer2, name: "Jonathan ", job: "Personal Trainer" },
    { img: Trainer3, name: "Ana June", job: "Yoga Trainer" },
  ];

  return (
    <>
      <section className="trainers-section w-full">
        <div className="container page-padding py-20">
          <div className="flex flex-col items-center text-center relative">
            <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={TitleRed}
                      alt=""
                      className="w-[180px] sm:w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center pl-5 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                      gym trainers
                    </p>
                  </div>

            <h2 className="md:text-4xl font-bold md:mb-4 lg:text-4xl text-4xl md:mt-0 mt-2">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] md:text-lg lg:text-md text-lg md:mt-0 mt-12 -m-9">
              Expert team of coaches helps you succeed in any goal, personalized
              guidance and motivation provided!
            </p>
          </div>

          <div className="flex mt-20 ">
            <div
              className="md:flex md:flex-row flex flex-col justify-center md:gap-14 gap-28"
              style={{ margin: "0 auto" }}
            >
              {trainers.map((train, id) => (
                <div key={id} className="relative w-auto flex flex-col gap-12">
                  <Image
                    src={train.img}
                    alt="trainer"
                    className="xl:w-60 lg:w-52 md:w-60 w-[15rem] z-10 relative mx-auto"
                  />
                  <Image
                    src={TrainerBg}
                    alt="trainer_background"
                    className="absolute top-1 w-full"
                  />
                  <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-2 absolute -bottom-[31px]">
                    <Image
                      alt="shape"
                      src={Shape}
                      className="absolute -top-[25px] lg:left-[113px] md:left-[75px] left-[170px]"
                    />

                    <h3 className="font-bold md:text-2xl lg:text-lg text-2xl">
                      {train.name}
                    </h3>
                    <p className=" md:text-lg lg:text-sm text-lg md:mt-0 mt-0 text-[#646464]">
                      {train.job}
                    </p>
                    <div className="flex gap-5 text-[#646464] w-full justify-center mt-2 md:text-2xl text-2xl">
                      <SiFacebook className="text-blue-900 cursor-default" />
                      <AiOutlineTwitter className="text-sky-500 cursor-default" />
                      <FaInstagram className="text-[#FF0336] cursor-default" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
