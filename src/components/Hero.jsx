import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Calendar, MapPin, Users } from "lucide-react";

const Hero = ({ darkMode }) => {
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToEvents = () => {
    document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
  };

  const eventDetails = [
    { icon: <Calendar size={20} />, text: "March 15-16, 2025" },
    { icon: <MapPin size={20} />, text: "University Campus" },
    { icon: <Users size={20} />, text: "500+ Participants" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pb-24 md:pb-32 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="text-blue-300" size={16} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center z-10 mt-16">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
            <span className="text-blue-200 font-semibold">
              🎉 Biggest Tech Fest of the Year
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow">
            CSE FEST 2025
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-8 font-light">
            Innovate • Compete • Celebrate
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            {eventDetails.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 py-2 border border-white/20"
              >
                <div className="text-blue-300">{detail.icon}</div>
                <span className="text-blue-100 text-sm sm:text-base">
                  {detail.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Countdown Timer (Responsive) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 w-full">
          {Object.entries(countdown).map(([key, value]) => (
            <div
              key={key}
              className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 flex-1 min-w-[70px] sm:min-w-[90px] max-w-[90px] sm:max-w-[110px] border border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-blue-200 capitalize font-medium">
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-16">
          <button
            onClick={scrollToEvents}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 animate-pulse text-sm sm:text-base"
          >
            🚀 Explore Events
          </button>
          <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
            📝 Register Now
          </button>
        </div>

        {/* Scroll Indicator (Fixed) */}
        <div className="relative flex justify-center mt-4 sm:mt-6">
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-blue-500/25"
          >
            <ChevronDown size={32} className="text-blue-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;