import TitleRed from "../../images/who-we-are/title-bg.svg";
import Image from "next/image";
import Cycling from "../../images/features/cycling.jpg";
import Karate from "../../images/features/karate.jpg";
import Power from "../../images/features/power.jpg";
import Meditation from "../../images/features/meditation.jpg";
import MMA from "../../images/features/mma.jpg";
import Workout from "../../images/features/workout.jpg";
import Link from "next/link";

function Featured() {
  return (
    <>
      <section className="page-padding md:py-28 py-20 bg-white overflow-x-hidden">
        <div className="container w-full">
          <div className="flex flex-col text-center items-center relative ">
            <div className="relative inline-block">
              <Image src={TitleRed} alt="" className="w-[260px]" />
              <p className="absolute inset-0 flex items-center pl-10 uppercase text-[13px] ml-5 sm:text-[13px] text-white font-semibold tracking-wider">
                our featured classes
              </p>
            </div>
            <h2 className="lg:text-4xl md:text-4xl text-3xl  text-black font-bold my-5 mb-16 -m-12">
              We Are Offering Best Flexible Classes
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 h-full lg:mt-2 md:flex md:flex-col md:gap-5 flex flex-col  gap-2 -m-8 lg:-m-0">
            <div className="item-0-div md:min-h-max min-h-[20rem] relative overflow-hidden">
              <Image
                src={Cycling}
                alt="cyling"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Cycling
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Monday: 9:00am-10:00am
                </p>
              </div>
            </div>

             <div className="item-1-div md:min-h-max min-h-[20rem] relative overflow-hidden">
              <Image
                src={Karate}
                alt="karate"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Karate
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Tuersday: 10:00am-11:00am
                </p>
              </div>
            </div>

            <div className="item-2-div md:min-h-max min-h-[20rem] relative overflow-hidden">
              <Image
                src={Power}
                alt="power"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Power
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>

             <div className="item-3-div md:min-h-max min-h-[20rem] relative overflow-hidden">
              <Image
                src={Meditation}
                alt="meditation"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Meditation
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Thursday: 1:00pm-2:00pm
                </p>
              </div>
            </div>

            <div className="item-4-div md:min-h-max min-h-[20rem] relative overflow-hidden">
              <Image
                src={MMA}
                alt="mma"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Martial Arts
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Friday: 6:00pm-7:00pm
                </p>
              </div>
            </div>

             <div className="item-5-div md:min-h-max min-h-[15rem] relative overflow-hidden">
              <Image
                src={Workout}
                alt="workout"
                className="item-0 ease-in duration-[0.4s]"
              />
              <div className="absolute z-10 bottom-2 left-10 max-w-[90%]">
                <p className="text-white lg:text-2xl md:text-3xl text-xl sm:text-7xl font-bold">
                  Workout
                </p>
                <p className="text-white bg-[#FF0336] md:text-lg lg:text-sm rounded-xs text-sm md:py-1 py-1 px-2">
                  Saturday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="featured-cta  justify-center text-left items-center w-full hidden md:block md:pt-9">
        <div className="container page-padding">
          <div className="flex items-center">
            <h2 className="text-white font-bold text-2xl max-w-6xl px-7">
              We Are Always Providing Best Fitness Service For You
            </h2>
            <Link href="/joinClass">
              <div className="bg-white w-32 text-center text-black/90 text-[13px] font-[600] p-3 hover:border hover:border-white hover:bg-[#FF0336] hover:text-white transition duration-300 rounded-md ">
                JOIN US ...
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-cta block p-2 md:hidden text-center py-4">
        <div>
          <p className="text-2xl font-bold text-white text-center">
            We Are Always Providing Best Fitness Service For You
          </p>
        </div>
        <Link href="/joinClass">
          <div className="bg-white w-28 h-auto text-black/90 text-md rounded-xs font-[600] p-1 mt-3 hover:border hover:border-gray-500 transition duration-300 flex justify-center mx-auto">
            JOIN US
          </div>
        </Link>
      </div>
    </>
  );
}

export default Featured;
