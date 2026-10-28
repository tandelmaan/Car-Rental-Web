import { motion } from "framer-motion";
import { Link } from "react-router";
import { fadeUp } from "../assets/animations";

const CTA = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-primary text-primary-content py-16 rounded-2xl"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold">Ready to hit the road?</h2>
          <p className="mt-2 text-primary-content/80">
            Find your perfect ride and start your journey today.
          </p>
        </div>

        <Link to="/cars" className="btn btn-secondary btn-lg">
          Browse Cars
        </Link>
      </div>
    </motion.section>
  );
};

export default CTA;