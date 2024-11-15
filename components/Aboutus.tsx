import { Averia_Sans_Libre } from "@next/font/google";
import React from "react";
import Image from "next/image";

import foodImage from "@/rec/te.jpg"; // Replace 'path-to-your-image' with the actual path to your image

const anta = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: "400",
});

function AboutUs() {
  return (
    <div
      style={anta.style}
      className="h-auto md:bg-spblack text-black items-center justify-center"
    >
      <div className="h-20 md:h-20 md:bg-spblack"></div>
      <div className=" mt-10 hidden md:block container mx-auto p-10 bg-white text-black rounded-lg shadow-md mb-10">
        <div className="xl:flex md:inline flex items-center justify-center">
          <Image
            src={foodImage}
            alt="Food Express"
            className="mb-6 rounded-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
          />
          <div className="inline p-20">
            <h1 className="text-4xl font-bold mb-6">Welcome to Food Express</h1>
            <div className="inline">
              <p className="text-lg mb-8">
                At Food Express, we're passionate about bringing people together
                through the joy of cooking. Founded in 2024, our culinary
                journey started with a simple idea: make cooking accessible and
                enjoyable for everyone. Whether you're a seasoned chef or a
                kitchen novice, Food Express is your go-to destination for
                delicious recipes and culinary inspiration.
              </p>
              <p className="text-lg mb-8">
                Our mission goes beyond providing recipes; we're building a
                community where food enthusiasts can share stories, tips, and
                the love of good food.
              </p>
              <p className="text-lg mb-8">
                Thank you for being a part of the Food Express family. Let's
                create and savor unforgettable moments in the kitchen together!
              </p>
              <p className="font-bold ">
                At Food Express, we're dedicated to giving back. Enjoy our
                complimentary service, where we help donate surplus food from
                large events to those in need. Join us in making a positive
                impact, ensuring no good food goes to waste.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden min-h-screen bg-white text-black block items-center justify-center p-10">
        <Image
          src={foodImage}
          alt="Food Express"
          className="mb-6 rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-black">
          Welcome to <span className="text-green-400">Food Express</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8">
          At Food Express, we're on a culinary adventure to bring people
          together through the joy of cooking. Established in 2024, our mission
          is to make cooking accessible and enjoyable for everyone. Whether
          you're a seasoned chef or a kitchen novice, Food Express is your go-to
          destination for delicious recipes and culinary inspiration.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8">
          Our commitment extends beyond recipes; we're building a community
          where food enthusiasts share stories, tips, and the love of good food.
          Join us on this flavorful journey, explore our diverse range of
          recipes, and connect with fellow foodies.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8">
          Thank you for being a cherished part of the Food Express family.
          Together, let's create and savor countless unforgettable moments in
          the kitchen
        </p>
        <p className="font-bold ">
          At Food Express, we're dedicated to giving back. Enjoy our
          complimentary service, where we help donate surplus food from large
          events to those in need. Join us in making a positive impact, ensuring
          no good food goes to waste.
        </p>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default AboutUs;
