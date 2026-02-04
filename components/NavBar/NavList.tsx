import Link from "next/link";
import React from "react";

const CustomLink = ({ href = "", title = "" }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer hover:text-[#f73f36] transition duration-300"
    >
      {title}
    </Link>
  );
};

function NavList() {
  return (
    <>
      <ul className="flex flex-col md:flex-row md:gap-8 gap-6 items-center text-white font-medium text-lg">
        {/* <span className="w-1/3 border-rgb(255,255,255,0.3)] border-solid border-2  p-7 rounded-md block md:hidden ml-[28rem]">
          <Link href="/joinClass" className="flex items-center ">
            <h3 className="text-white text-4xl font-[600] uppercase hover:text-red-400 transition duration-500 pl-16">
              join classs
            </h3>
          </Link>
        </span> */}
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/gallery" title="Gallery" />
        <CustomLink href="/schedule" title="Schedule" />
        <CustomLink href="/blog" title="Blog" />
        <CustomLink href="/pricing" title="Pricing" />
        <CustomLink href="/contact" title="Contact" />
      </ul>
    </>
  );
}

export default NavList;
