import React from "react";
import { Code, Cpu, Gamepad2, Trophy, Users, Zap } from "lucide-react";

const About = ({ darkMode }) => {
  const features = [
    {
      icon: <Code size={48} />,
      title: "Hackathon",
      desc: "Build innovative solutions in 24 hours with latest technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Cpu size={48} />,
      title: "Robotics",
      desc: "Showcase your bot engineering skills in intense battles",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Gamepad2 size={48} />,
      title: "Gaming",
      desc: "Compete in esports tournaments with exciting prizes",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { icon: <Trophy size={32} />, number: "50+", label: "Prizes" },
    { icon: <Users size={32} />, number: "500+", label: "Participants" },
    { icon: <Zap size={32} />, number: "20+", label: "Events" },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CSE Fest 2025
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join us for the biggest tech celebration of the year! CSE Fest
            brings together innovation, competition, and creativity in a two-day
            extravaganza featuring coding challenges, robotics battles, gaming
            tournaments, and much more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center p-8 rounded-2xl backdrop-blur-sm border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/50 border-gray-200"
              } hover:scale-105 transition-transform duration-300`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.number}
              </div>
              <div
                className={`text-lg font-semibold ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center p-8 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}
        >
          <h3
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Why Participate?
          </h3>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Gain hands-on experience, network with industry professionals,
            showcase your skills, win amazing prizes, and most importantly -
            have fun while learning!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
