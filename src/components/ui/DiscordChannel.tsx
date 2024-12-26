"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { discordInviteLink } from "@/constant";

type DiscordChannelProps = {
  channelName: string;
  className?: string;
  style?: React.CSSProperties;
};

const DiscordChannel = ({
  channelName,
  className,
  style,
}: DiscordChannelProps) => {
  return (
    <motion.div
      style={style}
      animate={{ translateY: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={cn(
        "absolute h-fit cursor-pointer rounded-lg border border-discord-white-600 bg-discord-white px-4 py-2 text-xs shadow-sm hover:bg-discord-white-600 dark:border-none dark:bg-discord-black dark:hover:bg-discord-black-400 md:text-lg",
        className,
      )}
    >
      <div className="font-semibold">
        <Link href={discordInviteLink} className="flex items-center gap-3">
          <span className="inline-block italic text-discord-black dark:text-discord-black-100">
            #
          </span>
          <span className="inline-block text-discord-black dark:text-discord-white-600">
            {channelName}
          </span>
        </Link>
      </div>
    </motion.div>
  );
};
export default DiscordChannel;
