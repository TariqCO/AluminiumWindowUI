"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center   ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[350px] md:w-[420px] p-6 rounded-lg border-2 border-white shadow-[6px_6px_0px_#fff] bg-[#111] flex flex-col items-center"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-5 text-2xl md:text-3xl font-extrabold text-white"
        >
          Contact Me
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col gap-5 w-full items-center"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full h-12 rounded-md border-2 border-white bg-[#111] shadow-[4px_4px_0px_#fff] text-white font-semibold px-3 outline-none placeholder:text-gray-500 focus:border-[#2d8cf0] transition"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full h-12 rounded-md border-2 border-white bg-[#111] shadow-[4px_4px_0px_#fff] text-white font-semibold px-3 outline-none placeholder:text-gray-500 focus:border-[#2d8cf0] transition"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            placeholder="Your Message"
            name="message"
            rows="4"
            className="w-full h-28 rounded-md border-2 border-white bg-[#111] shadow-[4px_4px_0px_#fff] text-white font-semibold px-3 py-2 outline-none resize-none placeholder:text-gray-500 focus:border-[#2d8cf0] transition"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, x: 3, y: 3 }}
            type="submit"
            className="w-40 h-12 rounded-md border-2 border-white bg-[#111] shadow-[4px_4px_0px_#fff] text-white font-semibold text-lg transition-all hover:bg-[#2d8cf0] hover:border-[#2d8cf0] hover:shadow-[4px_4px_0px_#2d8cf0]"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
