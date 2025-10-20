import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { teamData } from "../data/team";

const Team = ({ darkMode }) => {
  return (
    <section
      id="team"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"} relative`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The passionate minds behind CSE Fest 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? "bg-gray-700" : "bg-gray-50"
              } border ${darkMode ? "border-gray-600" : "border-gray-200"}`}
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {member.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {member.name}
              </h3>
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md`}
              >
                {member.role}
              </div>
              <p
                className={`mb-6 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {member.desc}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-600 text-blue-400 hover:bg-blue-500 hover:text-white"
                      : "bg-gray-200 text-blue-600 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Github size={20} />
                </a>
                <a
                  href={`mailto:${member.name
                    .toLowerCase()
                    .replace(" ", ".")}@university.edu`}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                    darkMode
                      ? "bg-gray-600 text-red-400 hover:bg-red-500 hover:text-white"
                      : "bg-gray-200 text-red-600 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div
          className={`mt-16 text-center p-8 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? "bg-gray-700/50 border-gray-600"
              : "bg-white/50 border-gray-200"
          }`}
        >
          <h3
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Want to Join Our Team?
          </h3>
          <p
            className={`text-lg mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We're always looking for passionate individuals to help make CSE
            Fest even better!
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
