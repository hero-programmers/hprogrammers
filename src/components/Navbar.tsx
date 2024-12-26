import { ThemeButton } from "./ui";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <a>Home</a>
        <a>About</a>
        <a>Join</a>
      </div>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
