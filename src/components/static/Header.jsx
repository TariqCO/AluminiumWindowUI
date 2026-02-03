"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import SubBtn from "./SubBtn";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState(null); // which dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu open/close
  const navRef = useRef(null);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > lastScrollY && window.scrollY > 80);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside header
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    {
      label: "Products",
      children: [
        { label: "Slimline Windows", href: "#windows" },
        { label: "Slimeline Sliding Doors", href: "#doors" },
        { label: "Frameless Windows", href: "#frameless" },
        { label: "Tilt and Turn Windows", href: "#tilt" },
        { label: "Slimeline Bifolding Doors", href: "#bifolding" },
        { label: "Textile Facades (FACID by Schucho)", href: "#textile" },
      ],
    },
    {
      label: "Services",
      children: [
        { label: "Luxury Villa Manufacturing and Installation", href: "#design" },
        { label: "Commercial Manufacturing and Installation", href: "#installation" },
        { label: "Third Party Manufacturing Services", href: "#maintenance" },
        { label: "Extrusion Powder Coating and Crimping Services", href: "#maintenance" },

      ],
    },
    { label: "About Us", href: "#about" },
    { label: "Our Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full shadow-md px-6 py-3 bg-[#0a0a0a] mt-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 bg-black">
            <img className="w-7 h-7 object-contain" src="/laLogo.png" alt="Logo" />
          </div>
          <span className="font-semibold text-gray-200 tracking-wide text-lg">
            LONDON ALUMINIUM
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
          {navLinks.map((link, index) =>
            link.children ? (
              <div key={index} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === index ? null : index);
                  }}
                  className="flex items-center gap-1 text-gray-200 hover:text-green-400 transition"
                >
                  {link.label} <ChevronDown className="w-4 h-4" />
                </button>
                {openMenu === index && (
                  <div className="absolute left-0 mt-2 bg-gray-900 text-gray-200 shadow-lg rounded-lg py-2 w-56 border border-gray-700">
                    {link.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-800 hover:text-green-400 transition"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="text-gray-200 hover:text-green-400 transition"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <SubBtn px="1em" py="0.6em" text={"Book Call Now"} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
              setOpenMenu(null);
            }}
            className="md:hidden text-gray-200 hover:text-green-400 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] text-gray-200 border-t border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link, index) =>
            link.children ? (
              <div key={index} className="space-y-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === index ? null : index);
                  }}
                  className="flex items-center justify-between w-full text-left hover:text-green-400 transition"
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMenu === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenu === index && (
                  <div className="ml-3 space-y-2">
                    {link.children.map((child, idx) => (
                      <a
                        key={idx}
                        href={child.href}
                        className="block px-2 py-1 hover:text-green-400 transition"
                        onClick={() => {
                          setOpenMenu(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="block hover:text-green-400 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
