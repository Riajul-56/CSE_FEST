import React from "react";
import { Star, Award, Crown, Gem } from "lucide-react";
import { sponsorLogos, sponsorTiers } from "../data/sponsors";

const Sponsors = ({ darkMode }) => {
  const groupedSponsors = sponsorLogos.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const tierIcons = {
    Platinum: <Crown size={32} />,
    Gold: <Gem size={32} />,
    Silver: <Award size={32} />,
    Bronze: <Star size={32} />,
  };

  return (
    <section
      id="sponsors"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-10 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
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
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Powered by industry leaders and innovators
          </p>
        </div>

        {/* Sponsors by Tier */}
        {Object.entries(groupedSponsors).map(([tier, sponsors]) => (
          <div key={tier} className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                className={`p-3 rounded-2xl bg-gradient-to-r ${sponsorTiers[tier].color} text-white shadow-lg`}
              >
                {tierIcons[tier]}
              </div>
              <h3
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {tier} Sponsors
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } border-2 ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } group`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {sponsor.logo}
                  </div>
                  <h4
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {sponsor.name}
                  </h4>
                  <div
                    className={`text-sm px-3 py-1 rounded-full inline-block ${
                      tier === "Platinum"
                        ? "bg-blue-500 text-white"
                        : tier === "Gold"
                        ? "bg-yellow-500 text-white"
                        : tier === "Silver"
                        ? "bg-gray-400 text-white"
                        : "bg-amber-700 text-white"
                    }`}
                  >
                    {tier}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Infinite Scroll Logos */}
        <div className="mt-16">
          <h3
            className={`text-2xl font-bold text-center mb-8 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Community Partners
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8 py-4">
              {[...sponsorLogos, ...sponsorLogos].map((sponsor, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-48 h-24 rounded-2xl shadow-lg flex items-center justify-center font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800 text-gray-200 border border-gray-700"
                      : "bg-white text-gray-700 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sponsor.logo}</span>
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become Sponsor CTA */}
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
            Interested in Sponsoring?
          </h3>
          <p
            className={`text-lg mb-6 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join our esteemed list of sponsors and get exposure to 500+ tech
            enthusiasts, students, and professionals. Multiple sponsorship tiers
            available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Sponsorship Kit
            </button>
            <button
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-100"
              }`}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
