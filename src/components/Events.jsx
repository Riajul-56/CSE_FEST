import React, { useState } from "react";
import { X, Clock, MapPin, Users, Trophy } from "lucide-react";
import { eventsData } from "../data/events";

const Events = ({ darkMode }) => {
  const [filter, setFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const categories = ["All", "Coding", "Tech", "Gaming", "Fun"];

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((e) => e.category === filter);

  return (
    <section
      id="events"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"} relative`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover exciting competitions and showcase your skills
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : darkMode
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group ${
                darkMode
                  ? "bg-gradient-to-br from-gray-700 to-gray-800"
                  : "bg-gradient-to-br from-blue-50 to-purple-50"
              } border ${darkMode ? "border-gray-600" : "border-blue-100"}`}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    event.category === "Coding"
                      ? "bg-blue-500 text-white"
                      : event.category === "Tech"
                      ? "bg-purple-500 text-white"
                      : event.category === "Gaming"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {event.category}
                </span>
              </div>

              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {event.title}
              </h3>
              <p
                className={`mb-6 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {event.desc}
              </p>

              <div className="space-y-2">
                <div
                  className={`flex items-center text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <Clock size={16} className="mr-2" />
                  {event.time}
                </div>
                <div
                  className={`flex items-center text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <MapPin size={16} className="mr-2" />
                  {event.venue}
                </div>
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className={`rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{selectedEvent.icon}</div>
                <div>
                  <h3
                    className={`text-3xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {selectedEvent.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block ${
                      selectedEvent.category === "Coding"
                        ? "bg-blue-500 text-white"
                        : selectedEvent.category === "Tech"
                        ? "bg-purple-500 text-white"
                        : selectedEvent.category === "Gaming"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {selectedEvent.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className={`p-2 rounded-lg hover:scale-110 transition-transform duration-300 ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-400"
                    : "hover:bg-gray-200 text-gray-500"
                }`}
              >
                <X size={24} />
              </button>
            </div>

            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {selectedEvent.desc}
            </p>

            <div
              className={`p-6 rounded-xl mb-6 ${
                darkMode ? "bg-gray-700" : "bg-blue-50"
              }`}
            >
              <h4
                className={`font-semibold text-lg mb-3 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <Trophy size={20} />
                Rules & Guidelines
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedEvent.rules}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div
                className={`flex items-center p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <Clock size={20} className="mr-3 text-blue-500" />
                <div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Time
                  </div>
                  <div
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {selectedEvent.time}
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center p-4 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <MapPin size={20} className="mr-3 text-green-500" />
                <div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Venue
                  </div>
                  <div
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {selectedEvent.venue}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button>
              <button className="flex-1 bg-gray-500 text-white py-4 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
