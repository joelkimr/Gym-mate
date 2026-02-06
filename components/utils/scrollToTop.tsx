"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout | null = null;

    const showButton = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setIsFaded(false);
        if (fadeTimeout) clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(() => {
          setIsFaded(true);
        }, 3000);
      } else {
        setIsVisible(false);
        setIsFaded(false);
        if (fadeTimeout) clearTimeout(fadeTimeout);
      }
    };

    const handleActivity = () => {
      if (window.scrollY > 300) {
        setIsFaded(false);
        if (fadeTimeout) clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(() => {
          setIsFaded(true);
        }, 3000);
      }
    };

    window.addEventListener("scroll", showButton);
    window.addEventListener("mousemove", handleActivity);

    return () => {
      window.removeEventListener("scroll", showButton);
      window.removeEventListener("mousemove", handleActivity);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-0 z-50 p-4 rounded-full bg-red-600 text-black shadow-md transition-all duration-300 hover:bg-red-600/70 ${
        isVisible && !isFaded ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-[17px] text-white" />
    </button>
  );
};

export default ScrollToTop;