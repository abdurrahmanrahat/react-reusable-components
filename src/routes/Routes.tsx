import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Lession8 from "../pages/M-07-F-Motion/Lession8";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <AniWithJs></AniWithJs>,
    element: (
      <div>
        <div className="h-[200vh] w-full bg-[#3D0066]"></div>
        <Lession8></Lession8>,
      </div>
    ),
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
