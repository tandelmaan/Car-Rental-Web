import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import AllCars from "../Pages/AllCars";
import Error404 from "../Pages/Error404";
import CarDetails from "../Pages/CarDetails";
import PrivetRouter from "./PrivateRouter";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Profile from "../Pages/Dashboard/Profile";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyListings from "../Pages/Dashboard/MyListings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allCars",
        Component: AllCars,
      },
      {
        path: "/car/:id",
        Component: CarDetails,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/*",
        Component: Error404,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <DashboardLayout />
      </PrivetRouter>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "myListings",
        Component: MyListings,
      },
    ],
  },
]);
