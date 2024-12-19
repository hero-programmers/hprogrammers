import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="h-screen mx-2 md:mx-4 flex justify-center items-center relative rounded-lg">
      <div className="absolute inset-0 bg-purple-800 bg-[repeating-linear-gradient(transparent_0%_49%,#0a0a0a_49%_50%,transparent_50%),repeating-linear-gradient(90deg,transparent_0%_49%,#0a0a0a_49%_50%,transparent_50%)] [background-size:50px_50px] rounded-2xl" />
      <div className="z-10">
        <p className="text-4xl md:text-6xl lg:text-8xl text-white">
          Join us on{" "}
          <Link
            href="https://discord.gg/hero-programmers-720365448809545742"
            className="underline underline-offset-2"
          >
            Discord.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
