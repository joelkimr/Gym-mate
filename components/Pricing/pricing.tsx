import React from "react";
import Image from "next/image";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingCard from "./pricingCards";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  return (
    <>
      <section className="pricing-section relative w-full">
        <div className="container page-padding py-16">
          <Image
            src={BgText}
            className="left-0 xxl:left-[35rem] absolute"
            alt="bg_img"
          />
          <div className="flex flex-col text-center relative items-center">
             <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={TitleRed}
                      alt=""
                      className="w-[180px] sm:w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center pl-5 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                      pricing charts
                    </p>
                  </div>

            <h2 className="md:text-4xl lg:text-4xl font-bold md:mb-4 text-4xl md:mt-0 mt-2 -m-9">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] md:text-lg lg:text-xl text-lg md:mt-0 mt-12 -m-7">
              Gymate an unknown printer took a galley of type and scrambled make
              a type specimen book.
            </p>
          </div>
          <div className="md:flex md:flex-row flex flex-col items-center gap-5 mt-12 md:mt-20 relative z-[2]">
            <PricingCard img={Img1} price="39" title="Beginner" />
            <PricingCard img={Img2} price="65" title="Advanced" />
            <PricingCard img={Img3} price="100" title="Professional" />
          </div>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 xxl:right-[35rem] bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
