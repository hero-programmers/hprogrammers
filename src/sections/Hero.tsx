import Logo from "@/assets/logo";

const Hero = () => {
  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0  bg-[radial-gradient(circle_at_right_30%_top_30%,hsl(276,88%,24%),hsl(216,52%,11%),hsl(216,52%,11%))] -z-10" />
      <div className="container flex justify-center items-center gap-2 md:gap-4 lg:gap-6">
        <Logo className="w-16 lg:w-32 xl:w-64" />
        <h1 className="font-space-grotesk text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
          Hero Programmers
        </h1>
      </div>
    </section>
  );
};

export default Hero;
