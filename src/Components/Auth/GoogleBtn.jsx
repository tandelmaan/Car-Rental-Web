import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const GoogleBtn = () => {
  const { setUserLoading, createUG } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleCreateGoogle = () => {
    createUG()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Authentication successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setUserLoading(false);
      });
  };
  return (
    <button
      onClick={handleCreateGoogle}
      className="bg-base-100 w-full flex items-center justify-center gap-3 p-4 rounded-xl mt-4 hover:bg-base-200 transition text-lg font-medium cursor-pointer"
    >
      <FcGoogle className="text-2xl" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleBtn;
