'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../images/logo/logo.svg";
import NavList from "./NavList";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { MdPerson } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky ? "bg-black shadow-lg" : "bg-black/70"
      }`}
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            className="w-44 md:w-40"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <NavList />
</div>

        <div className="hidden md:flex items-center gap-6">
          {/* LOGIN */}
          <Link
            href="/login"
            className="text-white text-3xl hover:text-red-400 transition"
          >
            <MdPerson />
          </Link>

          {/* JOIN CLASS */}
          <Link
            href="/joinClass"
            className="flex items-center gap-2 border border-[#f73f36] px-4 py-2 rounded-md group"
          >
            <span className="bg-[#FF0336] text-white p-1 rounded-sm transition-transform duration-500 group-hover:rotate-180">
              <FiPlus />
            </span>
            <span className="text-white text-xs font-semibold uppercase group-hover:text-red-400">
              join class
            </span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-white text-3xl"
        >
          {showMenu ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <NavList />

          <Link
            href="/login"
            className="flex items-center gap-2 text-white text-lg"
            onClick={() => setShowMenu(false)}
          >
            <MdPerson /> Login
          </Link>

          <Link
            href="/joinClass"
            className="inline-flex items-center gap-2 border border-[#f73f36] px-3 py-2 rounded-md"
            onClick={() => setShowMenu(false)}
          >
            <FiPlus className="text-white" />
            <span className="text-white uppercase text-sm">Join Class</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
