import { discordInviteLink } from "@/constant";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <Link href="/" className="hover:text-gray-400">
        Home
      </Link>
      <Link href="/#about" className="hover:text-gray-400">
        About
      </Link>
      <Link href={discordInviteLink} className="hover:text-gray-400">
        Join
      </Link>
    </>
  );
};

export default Navigation;
