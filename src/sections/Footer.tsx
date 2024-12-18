import Logo from "@/assets/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-12">
      <div className="container flex justify-between items-center">
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
