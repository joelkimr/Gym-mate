import React from "react";
import HomePage from "../components/HomePae/Home";
import About from "@/components/About/about";
import Featured from "@/components/Featured/featured";
import ChooseUs from "@/components/ChooseUs/chooseUs";
import Trainers from "@/components/Trainers/trainers";
import Gallery from "@/components/Gallery/gallery";
import Pricing from "@/components/Pricing/pricing";
import Blog from "@/components/Blog/blog";
import CallBanner from "@/components/CallBanner/callBanner";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <div className='w-full h-auto'>
        <HomePage />
         <About />
        {/*<Featured/>
        <ChooseUs/>
        <Trainers/>
        <Gallery/>
        <Pricing/>
        <Blog/>
        <CallBanner/>
        <Footer/> */}
      </div>
  );
}
