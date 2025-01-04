import { discordInviteLink } from "@/constant";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <Link
        href="/"
        className="underline-offset-4 transition duration-500 hover:text-gray-600 hover:underline dark:hover:text-gray-400"
      >
        Home
      </Link>
      <Link
        href="/#about"
        className="underline-offset-4 transition duration-500 hover:text-gray-600 hover:underline dark:hover:text-gray-400"
      >
        About
      </Link>
      <Link
        href={discordInviteLink}
        className="underline-offset-4 transition duration-500 hover:text-gray-600 hover:underline dark:hover:text-gray-400"
      >
        Join
      </Link>
    </>
  );
};

export default Navigation;
