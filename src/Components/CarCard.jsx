import { FaCar, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import useBookings from "../Hooks/useBookings";

const CarCard = ({ car }) => {
  const { isBooked } = useBookings();
  const booked = isBooked(car._id);

  return (
    <div className="shadow-xl rounded-2xl p-4 hover:shadow-2xl hover:-translate-y-4 transition-all duration-400 group">
      {/* Car Image */}
      <div className="w-full h-48 rounded-xl overflow-hidden relative">
        <img
          src={car.carImageUrl}
          alt={car.carName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
        />
        <span
          className={`text-white font-medium ${
            booked ? "bg-red-600" : "bg-green-600"
          } absolute top-0 right-0 rounded-tr-xl rounded-bl-4xl px-5 py-1`}
        >
          {booked ? "Booked" : "Available"}
        </span>
      </div>

      {/* Car Info */}
      <div className="mt-4 flex flex-col gap-2 justify-between">
        <h3 className="text-xl font-semibold">{car.carName}</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-primary">
            ₹{car.rentPrice} / day
          </p>
          <p className="text-lg font-medium ">⭐{car.ratings}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-500">
            <FaCar size={18} /> <span>{car.carCategory}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaUser size={18} /> <span>{car.providerName}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Link
          to={`/car/${car._id}`}
          className="btn btn-outline btn-primary w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
