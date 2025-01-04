"use client";

import { discordInviteLink } from "@/constant";
import Link from "next/link";
import { useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import { motion, useMotionTemplate } from "framer-motion";
import { DiscordLogoFloating } from "@/components/ui";

const CallToAction = () => {
  const containerRef = useRef<HTMLElement>(null);

  const [mouseX, mouseY] = useMousePosition(containerRef);

  const backgroundImage = useMotionTemplate`radial-gradient(circle at left ${mouseX}px top ${mouseY}px, var(--primary), var(--secondary), var(--secondary))`;

  return (
    <section
      ref={containerRef}
      className="relative mx-2 flex h-screen items-center justify-center overflow-hidden rounded-xl border border-slate-400/50 md:mx-8"
    >
      {/*<div className="absolute inset-0 rounded-2xl bg-primary bg-[repeating-linear-gradient(transparent_0%_49%,var(--foreground)_49%_50%,transparent_50%),repeating-linear-gradient(90deg,transparent_0%_49%,var(--foreground)_49%_50%,transparent_50%)] [background-size:50px_50px] dark:bg-[repeating-linear-gradient(transparent_0%_49%,var(--background)_49%_50%,transparent_50%),repeating-linear-gradient(90deg,transparent_0%_49%,var(--background)_49%_50%,transparent_50%)] dark:opacity-30" />*/}
      <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 rounded-xl bg-hero"
      />
      <DiscordLogoFloating />
      <DiscordLogoFloating className="bottom-0 left-full -translate-x-1/2 translate-y-16 rotate-[120deg]" />
      <div className="z-[2]">
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
