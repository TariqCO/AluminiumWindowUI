"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800",
    title: "Project A",
    span: "md:col-span-2 md:row-span-1", // wide (top left)
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
    title: "Project B",
    span: "md:col-span-1 md:row-span-2", // tall (top middle-bottom middle)
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800",
    title: "Project C",
    span: "md:col-span-1 md:row-span-2", // tall (top right-bottom right)
  },
  {
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800",
    title: "Project D",
    span: "md:col-span-1 md:row-span-1", // bottom left
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    title: "Project E",
    span: "md:col-span-1 md:row-span-1", // bottom middle-left
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800",
    title: "Project F",
    span: "md:col-span-2 md:row-span-1", // wide (bottom right)
  },
];


export default function GallerySection() {
  const [modal, setModal] = useState(null);

  return (
    <section id="gallery" className="w-full bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4"
        >
          Showcase Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          A curated selection of our standout work—interactive and immersive.
        </motion.p>
      </div>

      {/* Masonry-like grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-lg group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              onClick={() => setModal(img)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
              <p className="text-white font-semibold">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {modal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <motion.img
            src={modal.src}
            alt={modal.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-h-full max-w-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
