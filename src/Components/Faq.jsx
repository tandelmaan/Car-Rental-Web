import { motion } from "framer-motion";
import { fadeUp, stagger } from "../assets/animations";

const FAQ = () => {
  const faqs = [
    { q: "How do I rent a car?", a: "Simply browse available cars, select your dates, and confirm your booking." },
    { q: "Do I need a driving license?", a: "Yes, a valid driving license is required." },
    { q: "Can I cancel my booking?", a: "Yes, you can cancel before pickup." },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </motion.h2>

        <motion.div variants={stagger} className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">{faq.q}</div>
              <div className="collapse-content"><p>{faq.a}</p></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
