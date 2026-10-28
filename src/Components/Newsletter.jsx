import { motion } from "framer-motion";
import { fadeUp, stagger } from "../assets/animations";

const Newsletter = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-base-200 py-16 rounded-2xl"
    >
      <motion.div
        variants={stagger}
        className="max-w-5xl mx-auto px-4 text-center space-y-5"
      >
        <motion.h2 variants={fadeUp} className="text-4xl font-bold">
          Stay in the loop 🚗
        </motion.h2>

        <motion.p variants={fadeUp} className="text-base-content/70">
          Get exclusive deals, discounts, and new car alerts directly to your
          inbox.
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="join">
            <input
              type="email"
              className="input input-bordered join-item max-w-72"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Newsletter;
