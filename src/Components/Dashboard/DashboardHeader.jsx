import useAuth from "../../Hooks/useAuth";
import ThemeToggler from "../ThemeToggler";

const DashboardHeader = () => {
  const { user } = useAuth();
  return (
    <div className="pr-5 flex justify-end items-center gap-3 w-full">
      <ThemeToggler />
      <img src={user?.photoURL} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <h2 className="font-semibold text-base">{user?.displayName}</h2>
      </div>
    </div>
  );
};

export default DashboardHeader;
