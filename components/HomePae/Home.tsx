import Image from "next/image";
import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "./MainButton";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import HeroImage from "../../images/hero/hero-img.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src={HeroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay (contrast) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-20 sm:px-14 lg:px-8 min-h-screen flex items-center justify-end ">
        <div className="text-white max-w-[640px]">
          {/* FIND YOUR ENERGY */}
          <div className="relative inline-block mb-5 sm:mb-6">
            <Image src={TitleBg} alt="" className="w-[180px] sm:w-[200px]" />
            <p className="absolute inset-0 flex items-center pl-6 uppercase text-[11px] sm:text-[13px] font-semibold tracking-wider">
              find your energy
            </p>
          </div>

          {/* Heading */}
          <h1
            className="
              uppercase font-extrabold leading-[1.05]
              text-[32px]
              sm:text-[42px]
              md:text-[56px]
              lg:text-[72px]
              xl:text-[82px]
            "
          >
            make your body
          </h1>

          <h2
            className="
              uppercase font-light mt-1 sm:mt-2
              text-[22px]
              sm:text-[28px]
              md:text-[38px]
              lg:text-[52px]
            "
          >
            fit & perfect
          </h2>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <MainButton />
          </div>
        </div>
          <div
        className="
        absolute -right-[130px]  top-1/2 -translate-y-1/2 z-20
        hidden md:flex items-center gap-6 rotate-90
        "
        >
        <p className="uppercase text-[12px] font-bold tracking-[1rem] text-white">
          share
        </p>

        <span className="w-10 h-[2px] bg-[#FF0336]" />

        <div className="flex gap-7 text-[20px] text-white">
          <SiFacebook className="-rotate-90 hover:text-blue-600 transition" />
          <AiOutlineTwitter className="-rotate-90 hover:text-sky-500 transition" />
          <FaInstagram className="-rotate-90 hover:text-pink-500 transition" />
        </div>
      </div>

      {/* Share bar (desktop only) */}
      
        </div>
    </section>
  );
}

export default Hero;
