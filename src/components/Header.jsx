import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
