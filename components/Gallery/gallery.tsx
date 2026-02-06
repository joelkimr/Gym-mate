import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <section className="relative w-full">
        <Image
          src={BgIcon}
          alt="bg_img"
          className="w-64 absolute -top-3 xxl:left-[35rem]"
        />

        <div className="container page-padding py-12">
          <div className="flex flex-col text-center relative items-center ">
              <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={TitleRed}
                      alt=""
                      className="w-[180px] sm:w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center pl-5 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                      gym gallery
                    </p>
                  </div>

            <h2 className="md:text-4xl lg:text-4xl font-bold md:mb-4 text-4xl md:mt-0 mt-4">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] lg:text-sm md:text-lg text-lg md:mt-0 mt-4 -m-7">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company{`'`}s work
              atmosphere.
            </p>
          </div>

          <div className="gallery-grid  py-16 w-full h-auto relative">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
