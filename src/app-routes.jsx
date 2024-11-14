import { lazy } from "react";

const homePage = lazy(() => import("./pages/home/home"));
const playPage = lazy(() => import("./pages/play/play"));

const routes = [
  {
    path: "/",
    element: homePage,
  },
  {
    path: "/play",
    element: playPage,
  },
];

export default routes;
