import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import DemoBtn from "../../Components/Auth/DemoBtn";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";

const Login = () => {
  const { userLoading, setUserLoading, loginUEP } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    loginUEP(email)
      .then(() => {
        navigate(from);
        toast.success("Login successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };

  if (userLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center p-5">
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-screen w-full flex items-center justify-center p-5">
      <div className="bg-base-300 w-full max-w-md p-10 rounded-2xl">
        <h2 className="text-center text-3xl font-bold">Login your account</h2>
        <p className="text-center text-base font-medium mt-4">
          Don't have an account ?{" "}
          <Link to="/auth/register" className="text-primary ml-1">
            Register
          </Link>
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full"
            />
            <span className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1">
              <MdEmail />
            </span>
          </div>
          <div className="relative">
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-base-100 rounded-xl py-4 pl-4 pr-12 w-full"
            />
            {showPassword ? (
              <span
                onClick={() => setShowPassword(false)}
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1 cursor-pointer"
              >
                <FaEye />
              </span>
            ) : (
              <span
                onClick={() => setShowPassword(true)}
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 text-lg font-medium p-1 cursor-pointer"
              >
                <FaEyeSlash />
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary p-4 text-xl font-medium rounded-xl w-full cursor-pointer hover:bg-primary/70 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center font-bold text-white/50 my-4">Or</p>
        {/* Demo */}
        <DemoBtn />
      </div>
    </div>
  );
};

export default Login;
