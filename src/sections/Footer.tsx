import Logo from "@/assets/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-secondary text-foreground dark:text-background py-12 px-4 overflow-hidden">
      <div className="container flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <Logo className="size-8" />
          <h6 className="text-xl font-medium">Hero Programmers</h6>
        </div>
        <div className="text-sm">&copy; 2024 - All Rights Reserved.</div>
        <div className="flex gap-2 items-center font-medium">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Join</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
