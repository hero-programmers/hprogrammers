"use client";

import { TextOpacity } from "@/components/animation";
import MoreAboutUs from "@/components/MoreAboutUs";

const About = () => {
  return (
    <div className="container max-w-screen-xl overflow-hidden text-wrap px-4">
      <div className="flex h-screen flex-col items-start justify-center gap-2 md:gap-4">
        <TextOpacity
          className="text-4xl leading-relaxed md:text-8xl"
          text="We, a friendly community for beginner programmers who wants to
            become a"
        />
        <TextOpacity
          text="PROGRAMMING HERO!"
          className="block text-4xl leading-relaxed md:text-8xl"
          element="strong"
        />
      </div>
      <MoreAboutUs />
    </div>
  );
};

export default About;
