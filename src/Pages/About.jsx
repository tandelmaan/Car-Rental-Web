import { FaCar, FaClock, FaMapPin, FaStar, FaUser } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <title>About | RentWheels</title>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About RentWheels Rentals
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in seamless car rentals since 2015. We make
            travel simple, reliable, and affordable.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 max-w-360 mx-auto">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                To provide hassle-free, transparent, and customer-focused car
                rental services that empower travelers to explore with
                confidence and freedom.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                From compact city cars to luxury SUVs, we offer a diverse fleet
                backed by 24/7 support, flexible booking, and no hidden fees.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fully Insured</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">50+ Locations</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">4.9/5 Rating</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 max-w-360 mx-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600">200+</h3>
              <p className="text-gray-500 mt-2">Premium Vehicles</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500 mt-2">Pickup Locations</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-blue-600">8</h3>
              <p className="text-gray-500 mt-2">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Why Choose Us */}
      <section className="py-20 max-w-360 mx-auto">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose RentWheels?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Wide Selection
              </h3>
              <p className="text-gray-500">
                From economy to luxury — find the perfect car for every journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUser className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Customer First
              </h3>
              <p className="text-gray-500">
                Transparent pricing, no surprises, and dedicated support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Instant Booking
              </h3>
              <p className="text-gray-500">
                Reserve in seconds. Pick up in minutes. Drive away happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy drivers. Book your perfect ride today in
            just a few clicks.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Explore Our Fleet
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
