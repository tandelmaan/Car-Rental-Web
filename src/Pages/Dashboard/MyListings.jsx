import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading";

const MyListings = () => {
  const instanceSecure = useAxiosSecure();
  const { user } = useAuth();

  const [cars, setCars] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const { refetch, isLoading } = useQuery({
    queryKey: ["my-listings", user?.email, page, limit, status, search],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instanceSecure.get(
        `/myListings/${user?.email}?limit=${limit}&page=${page}&status=${status}&search=${search}`
      );
      setCars(res.data.result);
      setTotalPages(Math.ceil(res.data.total / limit));
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete listing?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (confirm.isConfirmed) {
      await instanceSecure.delete(`/deleteCar/${id}`);
      refetch();
      Swal.fire("Deleted!", "Listing removed.", "success");
    }
  };

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">My Listings</h2>

      {/* Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="join">
          {["all", "available", "booked"].map((s) => (
            <button
              key={s}
              className={`btn join-item ${status === s && "btn-primary"}`}
              onClick={() => {
                setStatus(s);
                setPage(1);
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <select
            className="select select-bordered"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            {[5, 10, 20].map((l) => (
              <option key={l} value={l}>
                {l}/page
              </option>
            ))}
          </select>

          <div className="relative">
            <FaSearch className="absolute left-3 top-3 z-10 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered pl-10"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, i) => (
                  <tr key={car._id}>
                    <td>{(page - 1) * limit + i + 1}</td>
                    <td>
                      <img
                        src={car.carImageUrl}
                        className="w-16 h-10 rounded object-cover"
                      />
                    </td>
                    <td>{car.carName}</td>
                    <td>{car.carCategory}</td>
                    <td>₹{car.rentPrice}/day</td>
                    <td>
                      <span
                        className={`badge ${
                          car.status ? "badge-success" : "badge-error"
                        }`}
                      >
                        {car.status ? "Available" : "Booked"}
                      </span>
                    </td>
                    <td className="text-right space-x-2">
                      <Link
                        to={`/editCar/${car._id}`}
                        className="btn btn-xs btn-outline btn-primary"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(car._id)}
                        className="btn btn-xs btn-outline btn-error"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            {[...new Array(totalPages)].map((_, p) => (
              <button
                key={p + 1}
                className={`btn btn-sm ${page === p + 1 && "btn-primary"}`}
                onClick={() => setPage(p + 1)}
              >
                {p + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MyListings;
