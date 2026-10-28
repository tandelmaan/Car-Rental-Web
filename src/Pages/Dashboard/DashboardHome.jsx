import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { FaCar, FaHistory, FaUser, FaClock } from "react-icons/fa";

const DashboardHome = () => {
  const { user, userLoading } = useAuth();

  if (userLoading) {
    return;
  }
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* Welcome Card */}
      <div className="p-5 rounded-2xl shadow bg-base-100">
        <h2 className="text-2xl font-semibold">
          Welcome back,{" "}
          <span className="text-primary">{user?.displayName || "User"}</span> 👋
        </h2>
        <p className="text-base-content/70 mt-1">
          Manage your rentals and explore new cars.
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Active Rentals" value="1" icon={<FaCar />} />
        <StatCard title="Total Rentals" value="12" icon={<FaHistory />} />
        <StatCard title="Pending Returns" value="0" icon={<FaClock />} />
        <StatCard title="Profile Completion" value="85%" icon={<FaUser />} />
      </div>

      {/* Active Booking */}
      <div className="p-5 rounded-2xl shadow bg-base-100">
        <h3 className="text-xl font-semibold mb-4">Active Booking</h3>

        <div className="flex items-center justify-between p-4 border rounded-xl">
          <div>
            <p className="font-semibold">Toyota Corolla 2022</p>
            <p className="text-sm text-base-content/60">
              Pickup: 02 Jan 2026 — Return: 06 Jan 2026
            </p>
          </div>
          <span className="badge badge-success">Ongoing</span>
        </div>
      </div>

      {/* Rental History */}
      <div className="p-5 rounded-2xl shadow bg-base-100">
        <h3 className="text-xl font-semibold mb-4">Recent Rentals</h3>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Honda Civic</td>
                <td>10 Dec — 15 Dec</td>
                <td>
                  <span className="badge">Completed</span>
                </td>
                <td>$320</td>
              </tr>
              <tr>
                <td>Nissan Sunny</td>
                <td>20 Nov — 22 Nov</td>
                <td>
                  <span className="badge badge-warning">Cancelled</span>
                </td>
                <td>$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        <ActionCard title="Browse Cars" to="/allCars" />
        <ActionCard title="View Rentals" to="/dashboard/rentals" />
        <ActionCard title="Edit Profile" to="/dashboard/profile" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="p-5 rounded-2xl shadow bg-base-100 flex items-center gap-4">
    <div className="text-3xl text-primary">{icon}</div>
    <div>
      <p className="text-sm text-base-content/60">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const ActionCard = ({ title, to }) => (
  <Link
    to={to}
    className="p-5 rounded-2xl shadow bg-base-100 hover:shadow-lg transition cursor-pointer"
  >
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-sm text-base-content/60 mt-1">Click to proceed</p>
  </Link>
);

export default DashboardHome;
