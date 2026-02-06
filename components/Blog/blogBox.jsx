import Link from "next/link";
import React from "react";

function BlogBox({ date, title, description }) {
  return (
    <>
      <div className='md:w-868px w-[110%] md:shadow-xl shadow-2xl flex flex-col px-7 md:py-8 py-2 hover:scale-y-105 hover:scale-x-105 hover:bg-gray-100 '>
        <p className='md:text-lg text-md lg:text-xs font-bold text-black/50 border-black/40 border-solid rounded-full border-[1px] md:w-fit md:w-48 w-28 md:px-5 px-3 md:py-2 py-0 md:mb-3 m-1'>
          {date}
        </p>
        <h3 className='md:text-xl lg:text-[24px] text-xl font-bold md:py-5 py-2'>{title}</h3>
        <p className='md:text-lg lg:text-lg text-md text-[#646464]'>
          {description}
        </p>
        <Link
          href='/blogs'
          className='md:text-lg text-xs lg:text-xs uppercase md:mt-10 m-5 md:w-44 w-22 md:h-14 lg:w-36 lg:h-9 bg-[#FF0336] text-white text-center md:pt-4 md:p-3 p-2 lg:pt-2 rounded-xs md:rounded-sm'>
          Read more
        </Link>
      </div>
    </>
  );
}

export default BlogBox;
