import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute top-0 mt-1 flex w-full justify-between border border-gray-500 border-opacity-50 bg-black bg-opacity-20 lg:justify-evenly">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
