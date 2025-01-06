import LogoMotion from "@/assets/logo-motion";
import { Navigation } from "@/components";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background px-4 py-12 text-white">
      <div className="container z-[2] flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <LogoMotion className="size-8" />
          <h6 className="text-xl font-medium">Hero Programmers</h6>
        </div>
        <div className="text-sm">&copy; 2024 - 2025 | All Rights Reserved.</div>
        <div className="flex items-center gap-4 font-medium">
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
