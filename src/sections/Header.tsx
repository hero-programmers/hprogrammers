import { Navbar } from "@/components";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 mt-5 w-full px-4 md:px-0">
      <div className="container relative max-w-2xl rounded-xl border p-4 text-foreground dark:border-white/15 dark:text-background">
        <div className="absolute inset-0 -z-10 rounded-xl bg-white bg-opacity-70 shadow backdrop-blur dark:bg-nav" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
