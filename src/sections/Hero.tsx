import LogoMotion from "@/assets/logo-motion";
import { DiscordChannel, JoinUsButton } from "@/components/ui";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-soft-white">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="container relative mx-2 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <LogoMotion className="mb-4 w-32 xl:w-64" />
        <div className="relative text-center">
          <DiscordChannel
            channelName="coding-help"
            style={{ rotate: "-30deg", translate: "0px -60px" }}
          />
          <h1 className="mb-6 font-space-grotesk text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Hero Programmers
          </h1>
          <DiscordChannel
            channelName="coding-resources"
            style={{
              rotate: "30deg",
              translate: "30px -30px",
              top: 0,
              right: 0,
            }}
          />
          <p className="mx-auto mb-8 max-w-screen-lg text-lg !leading-relaxed text-discord-white-300 md:text-4xl">
            We, a friendly community for beginner programmers who wants to
            become a <strong>PROGRAMMING HERO!</strong>
          </p>
          <DiscordChannel
            channelName="project-showcase"
            style={{ rotate: "-30deg", translate: "80px -30px", right: 0 }}
          />
          <JoinUsButton className="text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
