import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "csefest2025@university.edu",
      link: "mailto:csefest2025@university.edu",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      info: "CSE Department, University Campus",
      link: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      name: "Facebook",
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      url: "#",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      url: "#",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "#",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"} relative`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } group`}
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-lg mb-1 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {item.info}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`font-semibold text-xl mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    } ${social.color} hover:text-white`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className={`mt-8 rounded-2xl overflow-hidden shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <div
                className={`h-48 flex items-center justify-center ${
                  darkMode ? "bg-gray-600" : "bg-gray-200"
                }`}
              >
                <MapPin
                  size={48}
                  className={darkMode ? "text-gray-400" : "text-gray-500"}
                />
                <span
                  className={`ml-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Interactive Map Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            {/* Additional Info */}
            <div
              className={`mt-8 p-6 rounded-2xl ${
                darkMode ? "bg-gray-700" : "bg-blue-50"
              }`}
            >
              <h4
                className={`font-semibold text-lg mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                💡 Quick Support
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                For urgent queries during the fest, visit our help desk at the
                main entrance or call our helpline:{" "}
                <strong>+1 (555) 123-HELP</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
