import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import useAxios from "../Hooks/useAxios";
import Loading from "../Components/Loading";

const EditCar = () => {
  const { user, userLoading } = useAuth();
  const instanceSecure = useAxiosSecure();
  const instance = useAxios();
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [category, setCategory] = useState("");
  const [carImg, setCarImg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get(`/car/${id}`).then((result) => {
      setCar(result.data);
      setCategory(result.data.carCategory);
      setCarImg(result.data.carImageUrl);
      setLoading(false);
    });
  }, [instance, id]);

  if (userLoading) return;

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const updateCar = {
      carName: e.target.carName.value,
      carCategory: category,
      rentPrice: e.target.rentPrice.value,
      location: e.target.location.value,
      carDesc: e.target.carDesc.value,
      carImageUrl: carImg,
      createdAt: new Date().toISOString(),
    };

    instanceSecure.patch(`/updateCar/${id}`, updateCar).then((result) => {
      setLoading(false);
      if (result.data.modifiedCount > 0) {
        toast.success("Car updated successfully.");
        navigate("/myListings");
      }
    });
  };
  return (
    <section className="max-w-360 mx-auto p-5">
      <title>Edit this car | RentWheels</title>
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          Edit this Car
        </h2>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className="my-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-5">
            {/* Seller Name */}
            <div className="flex flex-col gap-2">
              <label className="label">Provider Name</label>
              <input
                type="text"
                name="providerName"
                className="input border-gray-500 w-full"
                value={user?.displayName}
                readOnly
              />
            </div>

            {/* Seller Email */}
            <div className="flex flex-col gap-2">
              <label className="label">Provider Email</label>
              <input
                type="text"
                name="providerEmail"
                className="input border-gray-500 w-full"
                value={user?.email}
                readOnly
              />
            </div>

            {/* Car Name */}
            <div className="flex flex-col gap-2">
              <label className="label">Car Name</label>
              <input
                type="text"
                required
                defaultValue={car.carName}
                name="carName"
                className="input border-gray-500 w-full"
                placeholder="example: Toyota Corolla"
              />
            </div>

            {/* Car Category */}
            <div className="flex flex-col gap-2">
              <label className="label">Car Type</label>
              <select
                required
                className="select border-gray-500 w-full"
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled={true}>Pick a type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
            </div>

            {/* Price per day */}
            <div className="flex flex-col gap-2">
              <label className="label">Rent Price (₹ / per day)</label>
              <input
                type="text"
                required
                defaultValue={car.rentPrice}
                name="rentPrice"
                className="input border-gray-500 w-full"
                placeholder="example: 10000"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="label">Location</label>
              <input
                type="text"
                required
                defaultValue={car.location}
                name="location"
                className="input border-gray-500 w-full"
                placeholder="example: City, Country"
              />
            </div>

            {/* Description */}
            <div className="col-span-full flex flex-col gap-2">
              <label className="label">Simple Description about your Car</label>
              <textarea
                className="textarea border-gray-500 w-full"
                required
                defaultValue={car.carDesc}
                name="carDesc"
                placeholder="example: Car license, Car brand, Car model. etc"
              ></textarea>
            </div>

            {/* Car image */}
            <div className="col-span-full flex flex-col gap-2">
              <label className="label">Your Car Image URL</label>
              <input
                type="text"
                required
                defaultValue={carImg}
                name="carImageURL"
                className="input border-gray-500 w-full"
                placeholder="example: https://..."
                onChange={(e) => setCarImg(e.target.value)}
              />
            </div>
            <div className="col-span-full flex items-center justify-center">
              {carImg && (
                <img
                  src={carImg}
                  alt=""
                  className="w-full max-w-sm mx-auto rounded-2xl"
                />
              )}
            </div>

            <div className="col-span-full">
              <button className="btn btn-primary w-full">Update Now</button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default EditCar;
