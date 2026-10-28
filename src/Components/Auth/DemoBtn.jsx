import { useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const DemoBtn = () => {
  const { setUserLoading, loginUEP } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleDemo = () => {
    loginUEP("demo@rentwheels.com")
      .then(() => {
        navigate(from);
        toast.success("Demo authentication successful.");
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
      onClick={handleDemo}
      className="bg-base-100 w-full flex items-center justify-center gap-3 p-4 rounded-xl mt-4 hover:bg-base-200 transition text-lg font-medium cursor-pointer"
    >
      <span>Use Demo Credential</span>
    </button>
  );
};

export default DemoBtn;
