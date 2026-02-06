import React from "react";
import Image from "next/image";
import Link from "next/link";

function PricingBox({ img, price, title }) {
  return (
    <div className="flex flex-col w-[120%] bg-white shadow-xl relative overflow-hidden">
      
      {/* IMAGE + TITLE */}
      <div className="relative w-full">
        <Image
          src={img}
          alt="pricing_img"
          className="w-full h-full grayscale object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="md:text-xl lg:text-2xl text-2xl font-bold text-center w-full pt-3 text-[#ff0336] px-3">
          {title}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center md:pt-5 pt-1 pb-4 md:pb-9 gap-9 lg:gap-3">
        
        {/* PRICE */}
        <p className="text-3xl lg:text-3xl font-extrabold relative md:py-[6px]">
          <span className="md:text-3xl lg:text-xl text-xl text-[#6d6d6d] absolute font-normal md:top-3 top-2 -left-5 lg:-left-4">
            $
          </span>
          {price}
        </p>

        {/* FEATURES */}
        <div className="flex flex-col md:text-lg lg:text-md text-lg text-center md:gap-2 text-[#646464] -mt-6 px-4">
          <p>Free Hand</p>
          <p>Gym Fitness</p>
          <p>Weight Loss</p>
          <p>Personal Trainer</p>
          <p>Cycling</p>
        </div>

        {/* CTA */}
        <Link href="/contact" className="w-full flex justify-center">
          <div className="md:w-44 w-44 lg:w-36 text-center text-black/90 md:text-lg text-md lg:text-sm font-[600] md:p-3 p-3 transition duration-300 rounded-sm uppercase bg-[#FF0336] hover:bg-red-600 text-white">
            purchase now
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PricingBox;
