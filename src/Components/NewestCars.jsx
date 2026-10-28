import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import CarCard from "./CarCard";
import Loading from "./Loading";
import HeroText from "./HeroText";

const NewestCars = () => {
  const instance = useAxios();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get("/newestCars").then((result) => {
      setCars(result.data);
      setLoading(false);
    });
  }, [instance]);

  const texts = ["Newest Cars", "Recent Cars", "Latest Cars"];

  return (
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          <HeroText texts={texts} />
        </h2>
      </div>
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#101214]/20 p-5 rounded-lg">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewestCars;
