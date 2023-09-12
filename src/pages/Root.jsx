import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
