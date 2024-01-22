import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Lession13 from "../pages/M-07-F-Motion/Lession13";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <AniWithJs></AniWithJs>,
    element: <Lession13></Lession13>,
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
