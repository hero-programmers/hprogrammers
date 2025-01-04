import { useMotionValue } from "framer-motion";
import { RefObject, useEffect } from "react";

const useMousePosition = (ref: RefObject<HTMLElement | null>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updatePosition = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  });

  return [mouseX, mouseY];
};

export default useMousePosition;
