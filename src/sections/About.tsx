"use client";

import Logo from "@/assets/logo";
import { TextOpacity } from "@/components/animation";

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
      <div className="mt-24 leading-relaxed">
        <h1 className="border-b-2 border-t-2 border-discord-black-900 py-4 text-center text-4xl font-bold text-discord-black-400 [border-style:dashed] dark:border-discord-white-300 dark:text-discord-white md:text-6xl">
          More About Us
        </h1>
        <div className="mt-12 space-y-8">
          <p className="whitespace-pre-line text-xl leading-tight md:text-4xl">
            At Hero Programmers, we&apos;re on a mission to bring together
            like-minded individuals who share a passion for coding and
            technology.
          </p>
          <p className="whitespace-pre-line text-xl leading-tight md:text-4xl">
            Whether you&apos;re a seasoned programmer or just starting your
            coding journey, our vibrant Discord server is the place to be! 🌐
          </p>
          <p className="whitespace-pre-line text-xl leading-tight md:text-4xl">
            Grandma&apos;s here to guide you on a magical coding journey! 🧙‍♀️{" "}
          </p>
          <p className="whitespace-pre-line text-xl leading-tight md:text-4xl">
            We believe every grandkid, aka Hero Programmer{" "}
            <Logo className="inline size-8" />, needs to be more connected and
            always strive to do something awesome for this world by using their
            coding magic. 🪄 💻
          </p>
          <p className="whitespace-pre-line text-4xl leading-tight md:text-6xl">
            So, what are you waiting for? Join us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
