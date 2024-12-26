import Logo from "@/assets/logo";
import { DiscordChannel } from "@/components/ui";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-foreground dark:text-background">
      <div className="absolute inset-0 -z-10 bg-background dark:bg-hero" />
      <div className="container relative flex h-fit items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <DiscordChannel
          channelName="coding-help"
          style={{
            top: "20%",
            translate: "70% 0",
            rotate: "-15deg",
          }}
        />
        <DiscordChannel
          channelName="general"
          style={{ rotate: "-20deg", left: 0, top: "10%" }}
        />
        <DiscordChannel
          channelName="announcement"
          style={{
            bottom: "50%",
            translate: "0 164%",
            rotate: "-10deg",
            zIndex: -10,
          }}
        />
        <DiscordChannel
          channelName="global-chat"
          style={{
            right: "-6%",
            translate: "0 -35px",
            rotate: "45deg",
          }}
        />
        <Logo className="w-16 lg:w-32 xl:w-64" />
        <div>
          <h1 className="font-space-grotesk text-2xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
            Hero Programmers
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
