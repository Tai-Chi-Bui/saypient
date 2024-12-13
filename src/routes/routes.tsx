import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

// Lazy-load pages for better performance
const Design = lazy(() => import("../pages/Design"));
const Preview = lazy(() => import("../pages/Preview"));
const Themes = lazy(() => import("../pages/Themes"));
const Logic = lazy(() => import("../pages/Logic"));

// Define the routes
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/design" replace />, // Redirect "/" to "/design"
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "/themes",
    element: <Themes />,
  },
  {
    path: "/logic",
    element: <Logic />,
  },
];

export default routes;
