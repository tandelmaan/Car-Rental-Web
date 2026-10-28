import { Link, NavLink, Outlet } from "react-router";
import { CiViewList } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";

const DashboardLayout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to access this page!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout().then(() => {
          Swal.fire({
            title: "Logged out!",
            text: "Your has been logged out.",
            icon: "success",
          });
        });
      }
    });
  };
  const menuItems = (
    <>
      {/* <li>
        <Link
          to="/"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Home"
        >
          <GoHome className="font-bold text-xl" />
          <span className="is-drawer-close:hidden">Home</span>
        </Link>
      </li> */}
      <li>
        <NavLink
          end
          to="/dashboard"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right dashNavLink"
          data-tip="Dashboard"
        >
          {/* Dashboard icon */}
          <RxDashboard className="font-bold text-xl" />
          <span className="is-drawer-close:hidden">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          end
          to="/dashboard/profile"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right dashNavLink"
          data-tip="Profile"
        >
          {/* Profile icon */}
          <CgProfile className="font-bold text-xl" />
          <span className="is-drawer-close:hidden">Profile</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          end
          to="/dashboard/myListings"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right dashNavLink"
          data-tip="My Listings"
        >
          {/* Profile icon */}
          <CiViewList className="font-bold text-xl" />
          <span className="is-drawer-close:hidden">My Listings</span>
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-red-500"
          data-tip="Logout"
        >
          <BiLogOut className="font-bold text-xl" />
          <span className="is-drawer-close:hidden">Logout</span>
        </button>
      </li>
    </>
  );
  return (
    <div className="min-h-screen">
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-4"
          type="checkbox"
          // defaultChecked
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full backdrop-blur-2xl sticky top-0 z-20 border-b border-primary/30">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="w-full">
              <DashboardHeader />
            </div>
          </nav>
          <div className="p-3">
            <div className="rounded-2xl p-4 bg-base-200">
              <Outlet />
            </div>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible border-r border-primary/30 bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start is-drawer-close:w-16 is-drawer-open:w-56 transition-all duration-300 z-30">
            {/* Sidebar logo */}
            <div className="p-4">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="BloodLine" className="w-8" />
                <h1
                  className={`text-2xl font-extrabold is-drawer-close:hidden`}
                >
                  RentWheels
                </h1>
              </Link>
            </div>
            {/* Sidebar content here */}
            <ul className="menu w-full grow gap-2 mt-2">
              {/* List items */}
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
