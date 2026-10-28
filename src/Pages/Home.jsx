import CTA from "../Components/Cta";
import FAQ from "../Components/Faq";
import HeroSlider from "../Components/HeroSlider";
import HowItWorks from "../Components/HowItWorks";
import NewestCars from "../Components/NewestCars";
import Newsletter from "../Components/Newsletter";
import Testimonials from "../Components/Testimonials";
import TopRatedCars from "../Components/TopRatedCars";
import TripCostEstimator from "../Components/TripCostEstimator";
import WhyRent from "../Components/WhyRent";

const Home = () => {
  return (
    <div className="max-w-360 mx-auto p-5">
      <title>Home | RentWheels</title>
      <HeroSlider />
      <NewestCars />
      <WhyRent />
      <TopRatedCars />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
      <Newsletter />
      <TripCostEstimator />
    </div>
  );
};

export default Home;
