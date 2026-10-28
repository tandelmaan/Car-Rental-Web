import { FaCalendar, FaCar, FaSearch } from "react-icons/fa";
import HeroText from "./HeroText";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <FaSearch className="w-10 h-10" />,
      title: "Search & Choose",
      desc: "Browse 200+ cars. Filter by price, type, or location in seconds.",
    },
    {
      number: "2",
      icon: <FaCalendar className="w-10 h-10" />,
      title: "Pick Dates & Book",
      desc: "Select pickup/drop-off dates. Confirm in 60 seconds — no paperwork.",
    },
    {
      number: "3",
      icon: <FaCar className="w-10 h-10" />,
      title: "Drive Away Happy",
      desc: "Pick up your car. Hit the road. Return anytime. 24/7 support included.",
    },
  ];
  const texts = ["How it works", "Step by Step", "How We Make It Simple"];
  return (
    <section className="py-20  mx-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          <HeroText texts={texts} />
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary transform -translate-y-1/2 -z-10"></div>

        {steps.map((step, index) => (
          <div key={index} className="group text-center relative">
            {/* Step Circle */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
              {step.number}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
