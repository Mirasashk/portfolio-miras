import React from "react";
import heroImg from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImg}
        alt="hero"
      />
      <div>
        <div className="absolute top-1/3 lg:left-60 md:left-36 left-8">
          <p className="text-2xl text-white font-bold ">Greetings!</p>
          <h1 className="text-4xl text-white font-bold ">
            Welcome to my portfolio
          </h1>
          <p className="text-2xl text-white font-bold ">
            A place where projects come to life
          </p>
          <button className="mt-2 hover:bg-teal-500">See projects</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
