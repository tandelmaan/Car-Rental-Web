// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import HeroText from "./HeroText";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      customerName: "John Anderson",
      carName: "Toyota Corolla",
      carRatings: 4.8,
      reviewsText:
        "The car was in perfect condition and very fuel-efficient. Pickup and drop-off were smooth. Highly recommend this service!",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      customerName: "Emily Roberts",
      carName: "Honda Civic",
      carRatings: 4.5,
      reviewsText:
        "Loved the car! Clean interior and comfortable ride. The customer support team was also very responsive.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      customerName: "Michael Brown",
      carName: "BMW X5",
      carRatings: 5.0,
      reviewsText:
        "Absolutely premium experience! The car felt brand new and the rental process was super easy. Worth every penny!",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      customerName: "Sophia Martinez",
      carName: "Hyundai Elantra",
      carRatings: 4.3,
      reviewsText:
        "The car performed well and was very clean. The only issue was a slight delay during pickup, but overall great experience.",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      customerName: "David Wilson",
      carName: "Tesla Model 3",
      carRatings: 4.9,
      reviewsText:
        "Smooth electric drive and amazing features! The autopilot made the trip even more enjoyable. Definitely renting again!",
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      customerName: "Olivia Johnson",
      carName: "Nissan Altima",
      carRatings: 4.6,
      reviewsText:
        "Affordable and comfortable! Perfect for my weekend trip. The staff was friendly and very professional.",
    },
  ];

  const texts = [
    "What Our Customers Say",
    "What People Say About Us",
    "Real Stories, Real Smiles",
  ];

  return (
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4">
          <HeroText texts={texts} />
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full mt-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide>
            <div className="py-12 px-1">
              <div className="p-5 relative rounded-xl h-60 bg-black/15 border-l-8 border-primary/50">
              <img src={testimonial.image} alt="" className="absolute -top-10 left-[calc(50%-40px)] rounded-full w-20 h-20" />
              <div className="flex flex-col gap-3 text-center mt-5">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-xl">{testimonial.customerName}</h2>
                  <h2 className="font-medium text-lg text-gray-500">{testimonial.carName}</h2>
                </div>
                <p className="line-clamp-4 text-gray-500">{testimonial.reviewsText}</p>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
