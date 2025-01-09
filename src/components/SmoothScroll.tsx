"use client";
import ReactLenis from "lenis/react";
import { useEffect } from "react";

const SmoothScroll = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
