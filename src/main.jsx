import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { loader as MainPageLoader } from "./pages/MainPage";
import CountryDetail, {
  loader as CountryDetailLoader,
} from "./pages/CountryDetail";

const LazyMainPage = React.lazy(() => import("./pages/MainPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="Loading....">
            <LazyMainPage />
          </Suspense>
        ),
        loader: MainPageLoader,
      },
      {
        path: "country/:code",
        element: <CountryDetail />,
        loader: CountryDetailLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
