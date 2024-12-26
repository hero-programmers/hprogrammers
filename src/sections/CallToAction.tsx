import { discordInviteLink } from "@/constant";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative mx-2 flex h-screen items-center justify-center rounded-lg md:mx-4">
      <div className="absolute inset-0 rounded-2xl bg-primary bg-[repeating-linear-gradient(transparent_0%_49%,var(--foreground)_49%_50%,transparent_50%),repeating-linear-gradient(90deg,transparent_0%_49%,var(--foreground)_49%_50%,transparent_50%)] [background-size:50px_50px] dark:bg-[repeating-linear-gradient(transparent_0%_49%,var(--background)_49%_50%,transparent_50%),repeating-linear-gradient(90deg,transparent_0%_49%,var(--background)_49%_50%,transparent_50%)] dark:opacity-30" />
      <div className="z-10">
        <p className="text-4xl text-white md:text-6xl lg:text-8xl">
          Join us on{" "}
          <Link
            href={discordInviteLink}
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
