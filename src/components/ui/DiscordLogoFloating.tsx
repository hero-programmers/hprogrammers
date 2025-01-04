"use client";

import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DiscordLogoFloating = ({ className }: { className?: string }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute inset-0"
    >
      <FaDiscord
        className={cn(
          "absolute left-0 z-[1] -rotate-45 text-[20rem] text-discord-white-600 md:text-[40rem]",
          className,
        )}
      />
    </motion.div>
  );
};

export default DiscordLogoFloating;
