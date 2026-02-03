"use client";

import { motion } from "framer-motion";
import Button from "@/components/static/Button";

export default function HeroSection() {
  return (
    <section className="bg-black text-white pt-25 pb-15 px-6 md:px-20 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            Premium European Aluminium{" "}
            <span className="text-green-400">Glazing Solutions</span>
          </h1>

          <p className="text-gray-300 mb-6">
            We manufacture and install high-end aluminium glazing products,
            delivering sleek and thermally efficient designs across the UAE,
            ensuring European quality with a touch of English elegance.
          </p>
          <p className="text-gray-400 mb-6">
            With over 25 years of UK experience and Leaders in Architectural
            Glass and Glazing Solutions, Structural Glass, Glass Extensions,
            Minimal Windows, and Sliding Glass Doors.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">★★★★★</span>
            <span className="text-gray-400 text-sm">
              Rated 5 stars by clients
            </span>
          </div>

          {/* Button */}
          <Button text={"Browse Products"} />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1732370123320-a907db9ab0e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Modern House with Aluminium Glazing"
            className="rounded-xl shadow-2xl border border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
