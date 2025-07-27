import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = ["Studio Owner", "Photographers", "Printing Vendors"];

export default function ContactUsSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (option) => {
    setSelectedService(option);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="contact" className="py-24 px-4 bg-[#18192a] text-white relative overflow-hidden">
      {/* Background Contact Title moved upward */}
      <div className="absolute inset-x-0 top-[6rem] text-center z-0">
  <h1
    className="select-none font-extrabold text-[7vw] md:text-[6rem] uppercase tracking-tighter bg-gradient-to-r from-violet-400 via-violet-600 to-violet-900 bg-clip-text text-transparent opacity-35 leading-none"
    style={{
      letterSpacing: '-0.04em',
      fontFamily: 'Inter, Montserrat, Arial, sans-serif',
      WebkitTextStroke: '1.5px #fff', // Solid white stroke
      textStroke: '1.5px #fff',        // For broader browser support (optional)
    }}
  >
    Contact
  </h1>
</div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Foreground heading changed text, removed white bg */}
        <div className="text-center mb-10 mt-8 md:mt-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-2 font-['Inter',sans-serif]"
            style={{ letterSpacing: '-0.04em' }}
          >
            Partner with Us Today
          </h2>
          <p className="text-lg text-gray-300 font-['Montserrat']">
            Connect with us for partnerships, support, or business queries.<br />
            Our experts will assist you promptly and professionally.
          </p>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-40 bg-black/40"
            >
              <motion.div
                initial={{ scale: 0.94, y: 32, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1, transition: { duration: 0.28 } }}
                exit={{ scale: 0.98, opacity: 0, transition: { duration: 0.18 } }}
                className="bg-[#23244a] rounded-2xl shadow-2xl px-8 py-10 max-w-md w-full text-center border border-purple-500"
              >
                <div className="mb-6 flex justify-center">
                  <svg width={56} height={56} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#a78bfa" />
                    <path d="M16 9l-4 4-2-2" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 font-['Inter',sans-serif] text-white">
                  Message Received!
                </h3>
                <p className="mb-6 text-gray-300 text-base">
                  Thank you for contacting us. Our team will reach out to you as soon as possible.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 text-white font-bold transition hover:bg-pink-600"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The form code remains unchanged */}

        <motion.form
          className="w-full max-w-2xl mx-auto flex flex-col gap-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-400 text-sm mb-1 ml-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="rounded-md px-5 py-3 bg-[#23244a] border border-gray-700 focus:border-purple-400 outline-none transition"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-400 text-sm mb-1 ml-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-md px-5 py-3 bg-[#23244a] border border-gray-700 focus:border-purple-400 outline-none transition"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 text-sm mb-1 ml-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-md px-5 py-3 bg-[#23244a] border border-gray-700 focus:border-purple-400 outline-none transition"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-400 text-sm mb-1 ml-2">Service Interested In</label>
            <button
              type="button"
              className="rounded-md px-5 py-3 bg-[#23244a] border border-gray-700 focus:border-purple-400 outline-none transition flex justify-between items-center"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              {selectedService || "Select Service"}
              <ChevronDown
                className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                size={22}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="absolute top-full left-0 w-full bg-[#23244a] border border-gray-700 mt-1 rounded-lg z-20 overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {serviceOptions.map((option) => (
                    <li
                      key={option}
                      className="cursor-pointer px-5 py-2 hover:bg-purple-600 hover:text-white transition"
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 text-sm mb-1 ml-2">Project Details / Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your project, goals, timeline..."
              className="resize-none rounded-md px-5 py-3 bg-[#23244a] border border-gray-700 focus:border-purple-400 outline-none transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-10 py-3 transition text-base mt-2 flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
