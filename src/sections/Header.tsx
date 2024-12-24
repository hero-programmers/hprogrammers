import { Navbar } from "@/components";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-10 mt-5">
      <div className="relative container p-4 text-white border  max-w-2xl border-white/15 rounded-xl">
        <div className="absolute inset-0 backdrop-blur -z-10 rounded-xl bg-nav" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
