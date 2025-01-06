"use client";
import { useEffect, useState } from "react";
import { PreLoadingAnimation } from "./animation";
import { AnimatePresence } from "framer-motion";

const DELAY = 2;

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, DELAY * 1000);
    })();
  });
  return (
    <AnimatePresence mode="wait">
      {isLoading && <PreLoadingAnimation />}
    </AnimatePresence>
  );
};

export default PreLoader;
