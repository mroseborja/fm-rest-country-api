import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ children, link }) => {
  return (
    <>
      <Link to={link} className="button">
        {children}
      </Link>
    </>
  );
};

export default Button;
