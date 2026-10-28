import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router";
import ThemeToggler from "./ThemeToggler";
import useAuth from "../Hooks/useAuth";
import { MdLogout } from "react-icons/md";
import Swal from "sweetalert2";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, userLoading, logout } = useAuth();

  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to access your activity!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const middleMenu = (
    <>
      <NavLink to="/" className="text-base font-medium navLink">
        Home
      </NavLink>
      <NavLink to="/allCars" className="text-base font-medium navLink">
        Browse Cars
      </NavLink>
      <NavLink to="/about" className="text-base font-medium navLink">
        About
      </NavLink>
      <NavLink to="/contact" className="text-base font-medium navLink">
        Contact
      </NavLink>
      {user && (
        <NavLink to="/dashboard" className="text-base font-medium navLink">
          Dashboard
        </NavLink>
      )}
      {/* <NavLink to="/addCar" className="text-base font-medium navLink">
        Add Car
      </NavLink>
      <NavLink to="/myListings" className="text-base font-medium navLink">
        My Listings
      </NavLink>
      <NavLink to="/myBookings" className="text-base font-medium navLink">
        My Bookings
      </NavLink> */}
      <div className="flex justify-end sm:hidden">
        <ThemeToggler />
      </div>
    </>
  );
  const rightMenu = (
    <>
      <div className="hidden sm:flex justify-center">
        <ThemeToggler />
      </div>
      {userLoading ? (
        ""
      ) : user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1 cursor-pointer">
            <img
              src={user?.photoURL}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-300 rounded-box z-1 min-w-64 w-fit p-2 shadow-sm border-3 border-primary"
          >
            <div className="flex flex-col items-center justify-center gap-1 p-2 mb-4">
              <img src={user?.photoURL} className="w-20 h-20 rounded-full" />
              <h2 className="text-xl font-medium">{user?.displayName}</h2>
              <p className="text-balance">{user?.email}</p>
              <Link to="/dashboard/profile" className="btn btn-primary">
                View Profile
              </Link>
            </div>
            <li>
              <Link
                to="/dashboard"
                className="border-b border-gray-500 font-medium text-base"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myListings"
                className="border-b border-gray-500 font-medium text-base"
              >
                My Listings
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myBookings"
                className="border-b border-gray-500 font-medium text-base"
              >
                My Bookings
              </Link>
            </li>
            <li className="mt-4 flex items-end">
              <button
                onClick={logoutHandler}
                className="w-fit btn text-red-500"
              >
                Logout <MdLogout />
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to="/auth/login"
          className="btn btn-primary hover:scale-110 transition-all duration-200 font-medium text-sm"
        >
          Login
        </Link>
      )}
    </>
  );
  return (
    <header className="shadow-xl sticky top-0 z-20 bg-base-200">
      <div className="max-w-360 mx-auto px-5 py-4 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <HiMenuAlt1
            onClick={() => setOpenMenu(true)}
            className="lg:hidden cursor-pointer text-2xl font-bold"
          />
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="RentWheels"
              className="w-10 hidden sm:flex"
            />
            <h1>
              <Link to="/" className="text-xl sm:text-2xl font-bold">
                RentWheels
              </Link>
            </h1>
          </div>
        </div>
        <div
          className={`absolute left-0 sm:left-5 top-0 shadow-2xl flex lg:hidden flex-col gap-5 p-8 rounded-b-3xl bg-base-300 w-full sm:max-w-xl z-10 duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-end">
            <HiXMark
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer text-3xl font-extrabold"
            />
          </div>
          <div className="flex flex-col gap-5">{middleMenu}</div>
        </div>
        <div className="hidden lg:flex gap-6 items-center">{middleMenu}</div>
        <div className="flex items-center gap-3 h-10">{rightMenu}</div>
      </div>
    </header>
  );
};

export default Header;
