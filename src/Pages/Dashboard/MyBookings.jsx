import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyBookings = () => {
  const instanceSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rate, setRate] = useState("Excellent");
  const [rateCar, setRateCar] = useState("");

  useEffect(() => {
    instanceSecure.get(`/myBookings/${user?.email}`).then((result) => {
      setCars(result.data);
      setLoading(false);
    });
  }, [instanceSecure, user]);

  const handleRate = (carId) => {
    document.getElementById("my_modal_5").showModal();
    setRateCar(carId);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    document.getElementById("my_modal_5").close();
    e.preventDefault();
    const ratingMap = {
      "Very Bad": 1,
      Bad: 2,
      Okay: 3,
      Good: 4,
      Excellent: 5,
    };

    const updateCarRatings = { ratings: ratingMap[rate] };

    instanceSecure
      .patch(`/updateCar/${rateCar}`, updateCarRatings)
      .then((result) => {
        setLoading(false);
        if (result.data.modifiedCount === 1) {
          toast.success("Rate gave successfully.");
        }
      });
  };

  const handleRemove = (id, carId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((toastResult) => {
      if (toastResult.isConfirmed) {
        setLoading(true);
        instanceSecure.delete(`/deleteBookedCar/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            const updateCarStatus = { status: true };
            instanceSecure
              .patch(`/updateCar/${carId}`, updateCarStatus)
              .then((result) => {
                setLoading(false);
                if (result.data.modifiedCount > 0) {
                  const remainingCar = cars.filter((car) => car._id !== id);
                  setCars(remainingCar);
                  Swal.fire({
                    title: "Removed!",
                    text: "Your booked car has been removed.",
                    icon: "success",
                  });
                }
              });
          }
        });
      }
    });
  };

  return (
    <section className="max-w-360 mx-auto p-5">
      <title>My bookings | RentWheels</title>
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          My Bookings: {cars.length}
        </h2>
      </div>

      {loading ? (
        <Loading />
      ) : cars.length === 0 ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          You not have any booked car!
        </h2>
      ) : (
        <>
          <div className="mt-10 hidden md:block">
            <table className="table">
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Image</th>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Rent Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car._id} className="border-b border-gray-400">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={car.carImageUrl}
                        alt={car.carName}
                        className="w-14 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="font-medium text-base">{car.carName}</td>
                    <td className="font-medium text-base">{car.carCategory}</td>
                    <td className="font-medium text-base">
                      ₹{car.rentPrice}/day
                    </td>
                    <td className="font-medium text-base flex flex-col gap-2">
                      <button
                        onClick={() => handleRate(car.carId)}
                        className="btn btn-success text-white"
                      >
                        Rate this
                      </button>
                      <button
                        onClick={() => handleRemove(car._id, car.carId)}
                        className="btn btn-error text-white"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-5 md:hidden">
            {cars.map((car) => (
              <div key={car._id} className="flex flex-col gap-2">
                <div className="w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={car.carImageUrl}
                    alt={car.carName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">{car.carName}</h2>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-base">{car.carCategory}</h2>
                  </div>
                  <h2 className="text-sm">₹{car.rentPrice} / day</h2>
                  <button
                    onClick={() => handleRate(car.carId)}
                    className="btn btn-success text-white"
                  >
                    Rate this
                  </button>
                  <button
                    onClick={() => handleRemove(car._id, car.carId)}
                    className="btn btn-error text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="label">Rate this car</label>
              <select
                required
                className="select border-gray-500 w-full"
                defaultValue={rate}
                onChange={(e) => setRate(e.target.value)}
              >
                <option>Very Bad</option>
                <option>Bad</option>
                <option>Okay</option>
                <option>Good</option>
                <option>Excellent</option>
              </select>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default MyBookings;
