import {
  FaCar,
  FaInfoCircle,
  FaStar,
  FaTag,
  FaUserCircle,
  FaUserTie,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrTextAlignLeft } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import useBookings from "../Hooks/useBookings";

const CarDetails = () => {
  const instance = useAxios();
  const { isBooked, bookCar } = useBookings();
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get(`/car/${id}`).then((result) => {
      setDetails(result.data);
      setLoading(false);
    });
  }, [instance, id]);

  const handleBooking = () => {
    if (isBooked(details._id)) {
      toast.error("This car is already booked. Please try another car.");
      return;
    }
    bookCar(details._id);
    toast.success("Car booked successfully.");
    navigate("/");
  };

  return (
    <div className="max-w-360 mx-auto p-5 my-5">
      <title>{`${details ? `${details.carName}` : ""} | RentWheels`}</title>

      {loading ? (
        <Loading />
      ) : !details ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          Sorry! This car details not found.
        </h2>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-5">
          <div className="">
            <img
              src={details.carImageUrl}
              alt={details.carName}
              className="w-full rounded-lg"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-2xl font-bold">{details.carName}</h2>
                <p>{details.carCategory}</p>
                <p className="flex items-center gap-1">
                  <FaStar className="text-amber-600" /> {details.ratings}
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaTag /> Category
                </h2>
                <p>{details.carCategory}</p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <span>₹</span> Rent Price
                </h2>
                <p className="text-success font-bold">
                  ₹{details.rentPrice} <small className="">/ day</small>
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaLocationDot /> Location
                </h2>
                <p className="">{details.location}</p>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <FaInfoCircle /> Car Status
                </h2>
                <p className="mt-1">
                  <span
                    className={`badge ${
                      isBooked(details._id) ? "bg-red-600" : "bg-green-600"
                    } text-white`}
                  >
                    {isBooked(details._id) ? "Booked" : "Available"}
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <GrTextAlignLeft /> Description
              </h2>
              <p className="">{details.carDesc}</p>
            </div>

            <hr className="my-4"></hr>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <FaUserTie /> Provider Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <div className="">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-4xl text-primary" />
                    <div>
                      <small className="block">Name</small>
                      <strong className="break-all">
                        {details.providerName}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-4xl text-primary min-w-fit" />
                    <div>
                      <small className="block">Email</small>
                      <strong className="break-all">
                        {details.providerEmail}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className={`btn ${
                isBooked(details._id) ? "btn-error" : "btn-primary"
              } text-xl text-white mt-5`}
              disabled={isBooked(details._id)}
            >
              <FaCar /> {isBooked(details._id) ? "Booked" : "Book Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
