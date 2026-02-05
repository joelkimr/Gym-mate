import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import Image from "next/image";
import Link from "next/link";

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-16 w-full overflow-x-hidden">
        <div className="container page-padding flex lg:flex-row md:flex-col md:items-center md:gap-14">

          {/* IMAGE SIDE */}
          <div className="video-div relative w-[50%] hidden md:block">
            <Image
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
          </div>

          {/* CONTENT */}
          <div className="relative w-full flex flex-col items-center lg:w-1/2 md:w-full md:flex md:flex-col md:items-center ">

            {/* TITLE BADGE */}
            <div className="relative inline-block mb-5 sm:mb-6">
                    <Image
                      src={TitleRed}
                      alt=""
                      className="w-[180px] sm:w-[200px]"
                    />
                    <p className="absolute inset-0 flex items-center pl-5 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                      why choose us
                    </p>
                  </div>

            {/* HEADING */}
            <h2
              className="
                lg:text-4xl md:text-[3rem] text-3xl
                text-white font-bold
                text-center text-3xl -m-4 mt-2
              "
            >
              We Can Give A Shape Of Your Body Here!
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                lg:text-xl md:text-lg text-[#b4b4b4]
                mt-14 md:mt-9 text-lg
             text-center -m-8
              "
            >
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            {/* FEATURES GRID */}
            <div
              className="
                grid md:grid-cols-2 md:grid-rows-2 grid-cols-2
                gap-x-6 gap-y-8
                md:gap-14 gap-11
                mt-28 md:mt-14
                space-y-12 md:space-y-0
                md:ml-0 -m-9
              "
            >
              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl text-sm sm:text-4xl">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl text-sm sm:text-4xl">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl text-sm sm:text-4xl">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl text-sm sm:text-4xl">
                  Fresh Bottle Watter
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 md:mt-12 w-full">
              <Link href="/schedule">
                <div
                  className="
                    bg-white lg:w-44 md:w-48 w-38 max-w-full mx-auto
                    h-auto lg:text-base md:text-xl text-md
                    text-center text-black font-[600]
                    p-2 hover:bg-[#FF0336] hover:text-white
                    transition duration-300 rounded-md
                  "
                >
                  OUR CLASSES
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
