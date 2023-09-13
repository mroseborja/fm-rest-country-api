import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const DarkModeToggle = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const element = document.body;

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    element.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const currTheme = JSON.parse(localStorage.getItem("theme"));
    element.setAttribute("data-theme", currTheme);
  }, [element]);

  return (
    <h2 className="header__toggle-mode">
      <ion-icon
        name={theme === "light" ? "moon-outline" : "sunny-outline"}
        aria-label="icon"
      ></ion-icon>

      <a href="#" onClick={switchTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </a>
    </h2>
  );
};

export default DarkModeToggle;
