import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Lession7 from "../pages/M-07-F-Motion/Lession7";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <AniWithJs></AniWithJs>,
    element: <Lession7></Lession7>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <h1>This is add Admin Dashboard</h1>,
      },
      {
        path: "add-admin",
        element: <h1>This is add Admin page</h1>,
      },
    ],
  },
]);

export default router;
