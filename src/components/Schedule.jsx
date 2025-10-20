import React, { useState } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";
import { scheduleData } from "../data/schedule";

const Schedule = ({ darkMode }) => {
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const filteredSchedule = scheduleData.filter((s) => s.day === selectedDay);

  return (
    <section
      id="schedule"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"} relative`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Event{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Plan your fest experience with our detailed schedule
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {["Day 1", "Day 2"].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedDay === day
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                {day}
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          {filteredSchedule.map((item, idx) => (
            <div key={idx} className="flex gap-6 group mb-8">
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <Clock size={24} />
                </div>
                {idx !== filteredSchedule.length - 1 && (
                  <div
                    className={`w-1 h-full mt-4 ${
                      darkMode ? "bg-purple-900" : "bg-purple-200"
                    } group-hover:bg-gradient-to-b group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300`}
                  ></div>
                )}
              </div>

              {/* Schedule item */}
              <div
                className={`flex-1 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } border ${darkMode ? "border-gray-700" : "border-purple-100"}`}
              >
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <div className="text-purple-600 font-bold text-lg">
                    {item.time}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.event.includes("Break")
                        ? "bg-yellow-500 text-white"
                        : item.event.includes("Ceremony")
                        ? "bg-purple-500 text-white"
                        : item.event.includes("Workshop")
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.event}
                </h3>
                <div
                  className={`flex items-center ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <MapPin size={18} className="mr-2" />
                  {item.venue}
                </div>
              </div>
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
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            📋 Important Notes
          </h3>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            • All events will start promptly at the scheduled time
            <br />
            • Participants must arrive 15 minutes before their event
            <br />• Schedule is subject to change - stay updated via our app
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
