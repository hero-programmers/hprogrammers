"use client";
import Logo from "@/assets/logo";
import { motion } from "framer-motion";

const vairents = {
  start: {
    clipPath: "circle(0% at 50% 50%)",
  },
  visible: {
    clipPath: "circle(150% at 50% 50%)",
    backdropFilter: "blur(10px)",
  },
  exit: {
    backdropFilter: "blur(0px)",
    transition: {
      duration: 1,
    },
    clipPath: "circle(0% at 50% 50%)",
  },
};

const ThemeTransition = () => {
  return (
    <div>
      <motion.div
        key={"theme-transition"}
        className="fixed inset-0 flex items-center justify-center bg-background dark:bg-secondary"
        variants={vairents}
        initial="start"
        animate="visible"
        exit="exit"
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div
            initial={{
              scale: 1,
            }}
            animate={{
              scale: 6,
              x: 1920 * 1.5,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
          >
            <Logo />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeTransition;
