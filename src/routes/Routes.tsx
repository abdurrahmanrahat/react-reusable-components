import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About/About";
import ClipPath from "../pages/ClipPath/ClipPath";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClipPath></ClipPath>,
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
