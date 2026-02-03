"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "../../../components/static/ContactForm";

export default function ContactFooter() {
  return (
    <footer id="contact" className="w-full bg-black text-white py-24 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side - Footer Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Reach out and let’s make
            something amazing together.
          </p>

          <div className="space-y-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={18} /> hello@example.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +123 456 789
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> New York, USA
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400 mt-8">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}

        <ContactForm />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
