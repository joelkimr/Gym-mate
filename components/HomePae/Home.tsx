import TitleBg from "../../images/pricing/titlebg.svg";

import MainButton from "./MainButton";
import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container-hero border border-green-500 flex flex-row justify-between ">
          <div className="flex flex-col text-white justify-center h-full">
            <div className="relative inline-block">
              {/* Background image */}
              <Image src={TitleBg} alt="text_bg" className="block" />

              {/* Text on top of image */}
              <p className="absolute inset-0 flex items-center text-white uppercase font-medium lg:text-sm md:text-xl text-[43px] pl-9 z-10">
                find your energy
              </p>
            </div>

            <h1 className="font-bold uppercase mb-16 text-[42px] md:text-[60px] lg:text-[80px]">
              make your body <br />
              <span className="font-thin">fit & perfect</span>
            </h1>

            <MainButton />
          </div>
              <div className="text-white">
                here
              </div>
          {/* <div className="right-0 bottom-1/2 translate-y-1/2 flex flex-row-reverse items-center -rotate-90 text-white">
            <p className="uppercase lg:text-md md:text-sm font-bold tracking-widest cursor-default">
              share
            </p>
            <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-4"></span>
            <div className="text-white gap-7 flex mr-4">
              <SiFacebook className="rotate-90 hover:text-blue-800 lg:text-2xl md:text-2xl ease-in duration-200" />
              <AiOutlineTwitter className="rotate-90 hover:text-sky-500 lg:text-2xl md:text-2xl ease-in duration-200" />
              <FaInstagram className="rotate-90 hover:text-secondary lg:text-2xl md:text-2xl ease-in duration-200" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
