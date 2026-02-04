import Link from "next/link";

function MainButton() {
  return (
    <Link
      href="/schedule"
      className="
        inline-flex items-center justify-center
        bg-white text-black font-semibold uppercase
        rounded-md transition duration-300
        hover:bg-[#FF0336] hover:text-white

        /* Typography */
        text-[13px]
        sm:text-[14px]
        md:text-[15px]

        /* Size */
        h-9
        sm:h-12
        md:h-12
        w-32
        sm:w-48
        md:w-44

        /* Alignment */
        ml-0
        sm:ml-0
      "
    >
      our classes
    </Link>
  );
}

export default MainButton;
