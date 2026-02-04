import React from "react";
import FooterLogo from "../../images/logo/logo-footer.svg";
import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Footer() {
  return (
    <>
      <footer className="bg-white w-full">
        <div className="container page-padding py-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 items-start text-left w-full">
            <div className="flex flex-col md:w-1/3 w-full gap-4">
              <div className="space-y-4">
                <Image src={FooterLogo} alt="footer_logo" className="w-44 h-auto" />
                <p className="text-sm md:text-base text-[#646464]">
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4 text-2xl">
                <AiOutlineTwitter className="text-sky-500 cursor-pointer" />
                <FaInstagram className="text-secondary cursor-pointer" />
                <SiFacebook className="text-blue-900 cursor-pointer" />
              </div>
              <div className="mt-4">
                <p className="text-xs font-medium text-[#646464] hidden md:block">
                  Privacy Policy | © {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-16 gap-8 w-full md:w-2/3 justify-between">
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <p className="text-lg md:text-2xl font-bold footer-main">Our Classes</p>
                <div className="w-12 h-1 bg-[#ff0366] rounded-sm"></div>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm md:text-base text-[#646464]">Fitness Classes</li>
                  <li className="text-sm md:text-base text-[#646464]">Aerobics Classes</li>
                  <li className="text-sm md:text-base text-[#646464]">Power Yoga</li>
                  <li className="text-sm md:text-base text-[#646464]">Learn Machines</li>
                  <li className="text-sm md:text-base text-[#646464]">Full-body Strength</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <p className="text-lg md:text-2xl font-bold footer-main">Working Hours</p>
                <div className="w-16 h-1 bg-[#ff0366] rounded-sm"></div>
                <div className="mt-3 space-y-1">
                  <p className="text-sm md:text-base text-[#646464] font-bold">Monday - Friday:</p>
                  <p className="text-sm md:text-base text-[#646464]">7:00am - 23:00pm</p>
                  <p className="text-sm md:text-base text-[#646464] font-bold">Saturday - Sunday</p>
                  <p className="text-sm md:text-base text-[#646464]">7:00am - 19:00pm</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-2xl md:hidden mt-4">
              <AiOutlineTwitter className="text-sky-500 cursor-default" />
              <FaInstagram className="text-[#FF0336] cursor-default" />
              <SiFacebook className="text-blue-900 cursor-default" />
            </div>

            <div className="w-full md:hidden mt-4">
              <p className="text-xs text-[#646464] text-center">Privacy Policy | © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
