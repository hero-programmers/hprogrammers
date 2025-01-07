import LogoMotion from "@/assets/logo-motion";
import { Navigation, Socials } from "@/components";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background px-4 py-6 text-white">
      <div className="container space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <LogoMotion className="size-8" />
              <h3 className="text-xl font-medium">Hero Programmers</h3>
            </div>
          </div>
          <div className="flex w-fit items-center gap-4 font-medium">
            <Navigation />
          </div>
          <Socials />
        </div>
        <div className="text-center text-sm text-discord-white-600">
          &copy; 2024 - 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
