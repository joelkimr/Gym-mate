import React from "react";
import Image from "next/image";
import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center px-4 text-center items-center md:mt-12 text-lg rounded-3xl shadow-2xl lg:min-h-[300px] md:min-h-[250px] min-h-[280px] z-30 hover:bg-[#F3F3F3] hover:text-black min-w-[200px]"
        >
          <Image
            src={card.img}
            alt="box_img"
            className="md:w-20 md:mb-4 w-16 mb-2 md:mt-9 lg:mt-9"
          />
          <p className=" md:text-[25px] text-[20px] font-semibold uppercase mb-2">
            {card.title}
          </p>
          <p className="lg:text-[17px] md:text-[20px] text-[16px] md:w-full w-4/5 md:h-40 h-32 pt-2 md:pt-0 text-[#646464]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;