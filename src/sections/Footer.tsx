import Logo from "@/assets/logo";
import { Navigation } from "@/components";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-background px-4 py-12 text-foreground dark:bg-secondary dark:text-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="size-8" />
          <h6 className="text-xl font-medium">Hero Programmers</h6>
        </div>
        <div className="text-sm">&copy; 2024 - All Rights Reserved.</div>
        <div className="flex items-center gap-2 font-medium">
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
