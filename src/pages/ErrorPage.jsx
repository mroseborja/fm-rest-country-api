import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>{`${error.status} | ${error.statusText}`}</p>
    </div>
  );
};

export default ErrorPage;
