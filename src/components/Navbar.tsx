import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <Navigation />
      </div>
    </nav>
  );
};

export default Navbar;
