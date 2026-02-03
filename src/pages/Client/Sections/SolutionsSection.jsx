"use client";

import { motion } from "framer-motion";
import { Clock, Building2, Zap, Award, PanelsTopLeft } from "lucide-react";

export default function SolutionsSection() {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-green-400 drop-shadow-lg" />,
      title: "Competitive Lead Times",
      desc: "Streamlined manufacturing that minimizes lead times with dedicated support and over 20 years of experience.",
    },
    {
      icon: <PanelsTopLeft className="w-12 h-12 text-green-400 drop-shadow-lg" />,
      title: "Sleek Designs",
      desc: "Aluminium glazing products that combine elegance, efficiency, and enhance any architectural project with style.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-green-400 drop-shadow-lg" />,
      title: "State of the Art Premises",
      desc: "Experts in high-end architectural glazing, using advanced UK-based facilities with cutting-edge technology.",
    },
    {
      icon: <Zap className="w-12 h-12 text-green-400 drop-shadow-lg" />,
      title: "Thermal Efficiency",
      desc: "Superior thermal performance with advanced aluminium systems, designed for comfort and sustainability.",
    },
    {
      icon: <Award className="w-12 h-12 text-green-400 drop-shadow-lg" />,
      title: "50 Years of Experience",
      desc: "Two generations of expertise with CNC machinery delivering the highest quality standards.",
    },
  ];

  return (
    <section className="relative py-20  bg-[#0a0a0a] w-full  text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 " />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-tight">
          Premium Aluminium Solutions
        </h2>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Expert manufacturers and installers of high-end aluminium glazing
          products crafted for modern architectural excellence.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl shadow-lg border border-white/10 hover:border-green-400/50 hover:shadow-green-500/30 hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-green-300 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
