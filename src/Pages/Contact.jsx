import {
  FaClock,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMail, MdSend } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for contact.");
    navigate("/");
  };
  return (
    <>
      <title>Contact | RentWheels</title>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Have questions? Need help with a booking? We're here 24/7 to assist
            you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 max-w-360 mx-auto">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center shrink-0">
                    <FaMapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-500 mt-1">
                      123 Main Street, Suite 500
                      <br />
                      Downtown, New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center shrink-0">
                    <FaPhone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-500 mt-1">
                      Toll-Free:{" "}
                      <a
                        href="tel:18005551234"
                        className="text-blue-600 hover:underline"
                      >
                        1-800-555-1234
                      </a>
                      <br />
                      Local:{" "}
                      <a
                        href="tel:01746596989"
                        className="text-blue-600 hover:underline"
                      >
                        (+880) 01746596989
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center shrink-0">
                    <MdMail className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-500 mt-1">
                      <a
                        href="mailto:support@driveeasy.com"
                        className="text-blue-600 hover:underline"
                      >
                        support@gmail.com
                      </a>
                      <br />
                      <a
                        href="mailto:bookings@driveeasy.com"
                        className="text-blue-600 hover:underline"
                      >
                        bookings@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center shrink-0">
                    <FaClock className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-500 mt-1">
                      Monday – Friday: 8:00 AM – 8:00 PM
                      <br />
                      Saturday – Sunday: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link
                    to="#"
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <FaFacebook className="text-2xl text-blue-600 font-bold" />
                  </Link>
                  <Link
                    to="#"
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <FaYoutube className="text-2xl text-red-600 font-bold" />
                  </Link>
                  <Link
                    to="#"
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <FaInstagram className="text-2xl text-red-600 font-bold" />
                  </Link>
                  <Link
                    to="#"
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <FaXTwitter className="text-2xl text-gray-800 font-bold" />
                  </Link>
                  <Link
                    to="#"
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <FaGithub className="text-2xl text-gray-800 font-bold" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className=" p-8 rounded-xl shadow-lg border border-gray-300">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full input"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select name="subject" required className="w-full input">
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="corporate">Corporate Rental</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full textarea"
                    placeholder="How can we help you today?"
                  />
                </div>

                <button type="submit" className="w-full btn btn-primary">
                  <MdSend className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8">Call our 24/7 hotline:</p>
          <a
            href="tel:18005551234"
            className="text-4xl font-bold hover:underline"
          >
            1-800-555-1234
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
