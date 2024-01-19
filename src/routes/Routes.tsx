import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Loading from "../pages/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading></Loading>,
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
