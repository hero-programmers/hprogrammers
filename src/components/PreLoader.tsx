"use client";
import { useEffect, useState } from "react";
import { PreLoadingAnimation } from "./animation";
import { AnimatePresence } from "framer-motion";

export const LOADING_DELAY = 4;

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, LOADING_DELAY * 1000);
    })();
  });
  return (
    <AnimatePresence mode="wait">
      {isLoading && <PreLoadingAnimation duration={LOADING_DELAY} />}
    </AnimatePresence>
  );
};

export default PreLoader;
