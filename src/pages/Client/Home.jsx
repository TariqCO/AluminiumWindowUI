import React from "react";

// Sections
import HeroSection from "./Sections/HeroSection";
import InfoSection from "./Sections/InfoSection";
import SolutionsSection from "./Sections/SolutionsSection";
import ContactSection from "./Sections/ContactSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import GallerySection from "./Sections/GallerySection";

const Home = () => {
  return (
    <div className="relative">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1642887534384-81c81882dd1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // ensures static feel
        }}
      />

      {/* Main Scrollable Content */}
      <main className="flex flex-col items-center w-full relative z-10">
        
        <HeroSection />
        <InfoSection />
        <SolutionsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
