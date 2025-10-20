import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Event Rules", href: "#" },
    { name: "Registration", href: "#" },
    { name: "Accommodation", href: "#" },
    { name: "Travel Guide", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative ${
        darkMode ? "bg-gray-900" : "bg-gray-800"
      } text-white`}
    >
      {/* Wave Divider */}
      <div
        className={`absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 ${
          darkMode ? "text-gray-800" : "text-gray-50"
        }`}
      >
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CSE FEST 2025
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join us for the biggest tech celebration of the year! Innovate,
              compete, and celebrate with like-minded tech enthusiasts from
              around the world.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">University Campus</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 text-sm">
                    csefest2025@university.edu
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-cyan-400 mt-1 flex-shrink-0"
                />
                <div>
                  <div className="text-gray-300 text-sm">
                    CSE Department, Main Campus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm text-center md:text-left">
              © 2025 CSE Fest. All rights reserved. | Made with{" "}
              <Heart size={14} className="inline text-red-500" /> by CSE Fest
              Team
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
