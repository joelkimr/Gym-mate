'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Logo from '../../images/logo/logo.svg';

import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { FiPlus } from '@react-icons/all-files/fi/FiPlus';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';
import { MdPerson } from 'react-icons/md';

/* -----------------------------
   NAV LINKS CONFIG
-------------------------------- */
const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Schedule', href: '/schedule' },
  { title: 'Blog', href: '/blog' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? 'hidden' : '';
  return () => {
    document.body.style.overflow = '';
  };
}, [menuOpen]);


  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${isSticky ? 'bg-black shadow-lg' : 'bg-black backdrop-blur h-16'}
      `}
    >
      {/* ================= CONTAINER ================= */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="Gymate Logo"
              priority
              className="w-[clamp(8rem,12vw,11rem)] h-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex flex-wrap items-center gap-x-8 gap-y-2 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="hover:text-[#f73f36] transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/login"
              className="text-white text-2xl hover:text-[#f73f36] transition"
            >
              <MdPerson />
            </Link>

            <Link
              href="/joinClass"
              className="flex items-center gap-2 border border-[#f73f36] px-4 py-2 rounded-md group"
            >
              <span className="bg-[#FF0336] p-1 rounded-sm text-white transition-transform group-hover:rotate-180 duration-700">
                <FiPlus />
              </span>
              <span className="text-xs font-semibold uppercase text-white group-hover:text-[#f73f36]">
                Join Class
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-white text-3xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoMdClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
<div
  className={`fixed inset-0 z-40 lg:hidden duration-300
  ${menuOpen ? 'opacity-100 pointer-events-auto bg-black' : 'opacity-0 pointer-events-none'}
`}
>
  {/* OVERLAY */}
  <div
    className="absolute inset-0 bg-black/60"
    onClick={() => setMenuOpen(false)}
  />

  {/* SLIDE PANEL */}
{/* <div
  className={`absolute left-0 top-0 h-full w-full bg-black
  transform transition-transform duration-300 ease-in-out
  ${menuOpen ? 'translate-x-0 ' : '-translate-x-full'}
`}
> */}
<div
  className={`absolute left-0 top-0 h-screen w-full bg-black
  overflow-y-auto overflow-x-hidden
  transform transition-transform duration-300 ease-in-out
  ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
`}
>


    {/* HEADER */}
    <div className="flex items-center justify-between px-6 py-2 border-b border-red-900">
      <Image
        src={Logo}
        alt="Logo"
        className="w-32 h-auto"
        priority
      />
      <button
        onClick={() => setMenuOpen(false)}
        className="text-white text-3xl"
        aria-label="Close menu"
      >
        <IoMdClose />
      </button>
    </div>

    {/* NAV LINKS */}
    <nav className="px-6 py-11 bg-black min-h-full">
      <ul className="flex flex-col gap-6 items-center text-white text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-[#f73f36] transition"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* ACTIONS */}
      <div className="mt-10 flex flex-col gap-4 items-center">
        <Link
          href="/login"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-white text-lg"
        >
          <MdPerson className='text-3xl'/> Login
        </Link>

        <Link
          href="/joinClass"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 border border-red-800 px-4 py-3 rounded-sm"
        >
          <FiPlus className="text-white" />
          <span className="uppercase text-white text-sm">
            Join Class
          </span>
        </Link>
      </div>
    </nav>
  </div>
</div>

    </nav>
  );
}
