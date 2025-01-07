import Link from "next/link";
import React from "react";
import { JoinUsButton } from "./ui";

const Navigation = () => {
  return (
    <>
      <Link
        href="/"
        className="underline-offset-4 transition duration-500 hover:text-discord-white-600 hover:underline"
      >
        Top
      </Link>
      <Link
        href="/#about"
        className="underline-offset-4 transition duration-500 hover:text-discord-white-600 hover:underline"
      >
        About
      </Link>
      <JoinUsButton />
    </>
  );
};

export default Navigation;
