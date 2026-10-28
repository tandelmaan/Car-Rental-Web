import HeroText from "./HeroText";

const WhyRent = () => {
  const texts = [
    "Why Rent With Us?",
    "Why Choose Our Service?",
    "Why Partner With Us?",
  ];
  return (
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center border-b-4 mb-5">
          <HeroText texts={texts} />
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-5 text-center">
        <div className="rounded-lg shadow-xl p-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Best Price Guarantee</h3>
          <p className="text-gray-600">
            We beat any competitor by 10% or it’s free.
          </p>
        </div>
        <div className="rounded-lg shadow-xl p-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-emerald-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-emerald-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-10 0h10"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Free Delivery & Pickup</h3>
          <p className="text-gray-600">Within 50km radius — no hidden fees.</p>
        </div>
        <div className="rounded-lg shadow-xl p-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">24/7 Roadside Support</h3>
          <p className="text-gray-600">One call away, anywhere, anytime.</p>
        </div>
        <div className="rounded-lg shadow-xl p-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-amber-300 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-amber-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Fully Insured Fleet</h3>
          <p className="text-gray-600">Zero liability with premium coverage.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyRent;
