import { ThemeButton } from "./ui";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <a>Home</a>
        <a>About</a>
        <a>Join</a>
      </div>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
