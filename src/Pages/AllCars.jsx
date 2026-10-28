import { useEffect, useState } from "react";
import CarCard from "../Components/CarCard";
import useAxios from "../Hooks/useAxios";

const AllCars = () => {
  const instance = useAxios();
  const [cars, setCars] = useState([]);
  const [src, setSrc] = useState("");
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  const limit = 12;
  const skip = currentPage * limit;
  const totalPages = Math.ceil(totalCars / limit);

  useEffect(() => {
    instance
      .get(`/allCars?limit=${limit}&skip=${skip}&src=${src}`)
      .then((result) => {
        setCars(result.data.result);
        setTotalCars(result.data.total);
        setLoad(false);
      });
  }, [instance, limit, skip, src]);

  return (
    <section className="max-w-360 mx-auto p-5">
      <title>Our all cars | RentWheels</title>
      <div className="flex items-center justify-center my-5">
        <h2 className="text-4xl font-bold text-center border-b-4">
          Our All Cars
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
        <h2 className="text-2xl font-semibold">Total Cars ({cars.length})</h2>
        <label className="input border-gray-500">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search car by name or type"
            value={src}
            onChange={(e) => {
              setSrc(e.target.value);
              setLoad(true);
            }}
          />
        </label>
      </div>
      {load ? (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#101214]/20 p-5 rounded-lg">
          {[...new Array(6)].map((_, index) => (
            <div key={index} className="flex w-full flex-col gap-4">
              <div className="skeleton h-48 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="flex items-center justify-between gap-5 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex items-center justify-between gap-5 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="skeleton h-8 w-full"></div>
            </div>
          ))}
        </div>
      ) : cars.length === 0 ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          Data not found!
        </h2>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
      <div className="flex justify-center flex-wrap gap-3 py-5 mt-10">
        {currentPage > 0 && (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
              setLoad(true);
            }}
            className="btn hover:border-primary"
          >
            Prev
          </button>
        )}
        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i + 1}
            onClick={() => {
              setCurrentPage(i);
              setLoad(true);
            }}
            className={`btn hover:border-primary ${
              currentPage === i && "btn-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage + 1 < totalPages && (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setLoad(true);
            }}
            className="btn hover:border-primary"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default AllCars;
