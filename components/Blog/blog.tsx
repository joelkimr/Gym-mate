import React from "react";
import Image from "next/image";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./blogBox";

function Blog() {
  return (
    <section className="bg-white w-full overflow-x-hidden">
      <div className="container page-padding py-9 md:py-24">

        {/* HEADER */}
        <div className="relative flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          
           <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={TitleRed}
                      alt=""
                      className="w-[200px] sm:w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center pl-5 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                      latest blog news
                    </p>
                  </div>

          <h2 className="font-bold text-3xl sm:text-4xl lg:text-4xl mt-1 text-black">
            Our Recent News
          </h2>
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 -ml-9 max-w-7xl mx-auto">
          <BlogBox
            date="22.03.2023"
            title="Yoga For Everyone in 2023"
            description="This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds."
          />

          <BlogBox
            date="13.05.2023"
            title="Getting Back Into CrossFit After Vacation"
            description="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."
          />

          <BlogBox
            date="28.01.2023"
            title="Meet Fitness Ambassador Grace"
            description="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
          />
        </div>

      </div>
    </section>
  );
}

export default Blog;
