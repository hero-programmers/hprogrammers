"use client";
import ReactLenis from "lenis/react";

const SmoothScroll = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
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
