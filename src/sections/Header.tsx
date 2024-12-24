import { Navbar } from "@/components";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-10 mt-5 px-4 md:px-0">
      <div className="relative container p-4 text-foreground dark:text-background border  max-w-2xl dark:border-white/15 rounded-xl">
        <div className="absolute inset-0 backdrop-blur -z-10 rounded-xl dark:bg-nav shadow" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
