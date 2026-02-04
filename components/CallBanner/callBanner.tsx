import React from "react";
import Link from "next/link";

function CtaBanner() {
  return (
    <>
      <section className="cta-section  h-auto w-full">
        <div className="container page-padding md:py-16 text-white py-20">
          <h2 className="md:text-4xl text-7xl font-bold">
            Get More Inquiries ?
          </h2>
          <br />
          <h3 className="md:text-2xl text-5xl font-bold mb-9">
            <span className="text-[#FF0336]">Call:</span> + 1 234 567 89
          </h3>
           <Link href="/contact">
          <div className="bg-white md:w-32 w-64 h-auto text-center text-black/90 md:text-sm text-3xl font-[600] p-7 md:p-3 hover:bg-[#FF0336] hover:text-white transition duration-300 md:rounded-md rounded-lg">
           CONTACT US
          </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
