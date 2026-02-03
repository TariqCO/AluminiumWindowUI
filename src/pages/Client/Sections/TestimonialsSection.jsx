"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This service exceeded my expectations! Everything was smooth, fast, and professional.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I love how intuitive and easy to use this platform is. It has helped my business grow.",
    rating: 4,
  },
  {
    name: "Emily Carter",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "A beautiful experience! The design and support team really pay attention to detail.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-10 px-6 flex flex-col items-center relative">
      {/* Soft overlay to improve readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl mb-14"
      >
        What People Say
      </motion.h2>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl hover:scale-[1.03] transition-transform duration-300">
              <CardContent className="p-6 flex flex-col gap-4">
                {/* Avatar + Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 ring-2 ring-white/40">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">{review.name}</h3>
                    <p className="text-gray-200 text-sm">{review.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-100/90 text-base leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 text-yellow-400 mt-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
