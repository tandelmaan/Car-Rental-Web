import { Outlet } from "react-router";

const AuthLayout = () => {
  document.querySelector("html").setAttribute("data-theme", "dark");
  return <Outlet />;
};

export default AuthLayout;
