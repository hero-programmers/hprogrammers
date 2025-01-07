import LogoMotion from "@/assets/logo-motion";
import { JoinUsButton } from "@/components/ui";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-soft-white">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="container relative mx-2 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <LogoMotion className="mb-4 w-32 xl:w-64" />
        <div className="text-center">
          <h1 className="mb-6 font-space-grotesk text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Hero Programmers
          </h1>
          <p className="mx-auto mb-8 max-w-screen-lg text-lg !leading-relaxed text-discord-white-300 md:text-4xl">
            We, a friendly community for beginner programmers who wants to
            become a <strong>PROGRAMMING HERO!</strong>
          </p>
          <JoinUsButton className="text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
