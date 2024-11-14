import { lazy } from "react";

const homePage = lazy(() => import("./pages/home/home"));

const routes = [
  {
    path: "/",
    element: homePage,
  },
];

export default routes;
