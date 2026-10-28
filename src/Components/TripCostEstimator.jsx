import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../assets/animations";

const TripCostEstimator = () => {
  const [days, setDays] = useState(1);
  const [distance, setDistance] = useState(50);
  const pricePerDay = 3500;
  const fuelPerKm = 12; // estimated fuel cost per km

  const totalRent = days * pricePerDay;
  const fuelCost = distance * fuelPerKm;
  const total = totalRent + fuelCost;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-linear-to-r from-base-200 to-base-300"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-10"
        >
          Trip Cost Estimator 🚦
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="bg-base-100 rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <div>
              <label className="label font-medium">Trip Days</label>
              <input
                type="range"
                min="1"
                max="14"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="range range-primary"
              />
              <p>{days} day(s)</p>
            </div>

            <div>
              <label className="label font-medium">
                Estimated Distance (km)
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="range range-secondary"
              />
              <p>{distance} km</p>
            </div>
          </div>

          <div className="bg-base-200 rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold">Estimated Cost</h3>
            <p>Rental: ₹{totalRent}</p>
            <p>Fuel: ₹{fuelCost}</p>
            <hr />
            <p className="text-2xl font-bold text-primary">Total: ₹{total}</p>
            <button className="btn btn-primary w-full mt-4">Find Cars</button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TripCostEstimator;
