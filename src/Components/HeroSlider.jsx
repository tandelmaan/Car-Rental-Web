// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const HeroSlider = () => {
  const instance = useAxios();
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get("/heroSlider").then((result) => {
      setSliders(result.data);
      setLoading(false);
    });
  }, [instance]);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full bg-[#101214]/20 rounded-lg p-5"
    >
      {loading ? (
        [...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="p-5 flex flex-col-reverse sm:flex-row gap-3 sm:gap-10 items-center justify-center">
              <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full mt-3"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-8 sm:h-4 w-full sm:w-28"></div>
              </div>
              <div className="flex-1 w-full max-w-sm flex items-center justify-center">
                <div className="skeleton h-54 w-full"></div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : sliders.length === 0 ? (
        <h2 className="mt-10 text-center font-bold text-2xl">
          Data not found!
        </h2>
      ) : (
        sliders.map((slider) => (
          <SwiperSlide key={slider._id}>
            <div className="p-5 flex flex-col-reverse sm:flex-row gap-3 sm:gap-10 items-center justify-center">
              <div className="flex-1 flex flex-col gap-4 max-w-md">
                <h2 className="text-3xl font-semibold">{slider.carName}</h2>
                <p className="text-lg line-clamp-3">{slider.carDesc}</p>
                <Link to={`/car/${slider._id}`} className="btn btn-primary">
                  Book Now
                </Link>
              </div>
              <div className="flex-1 w-full max-w-sm flex items-center justify-center">
                <img
                  className="w-full rounded-2xl"
                  src={slider.carImageUrl}
                  alt={slider.carName}
                />
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default HeroSlider;
