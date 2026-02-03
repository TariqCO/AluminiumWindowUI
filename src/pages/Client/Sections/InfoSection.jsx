"use client";

import { motion } from "framer-motion";
import SubBtn from "@/components/static/SubBtn";

export default function InfoSection() {
  const cards = [
    {
      title: "Premium Aluminum solutions",
      subtitle: "Elevate with premium window systems",
      button: "Explore",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Our Team",
      subtitle: "Check out our team of window experts",
      button: "Click Here",
      image:
        "https://images.unsplash.com/photo-1581092795360-0e96f5d2c568?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Get Your Free Quote",
      subtitle: "Interested in building your dream home?",
      button: "Get In Touch",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className=" bg-[#0a0a0a] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-17 py-6">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background image */}
          <motion.img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-200 text-sm mb-2">{card.subtitle}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
            <SubBtn text={card.button} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
