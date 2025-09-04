import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterEvents } from "../features/events/eventsSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    dispatch(filterEvents(filters));
  };

  const resetFilters = () => {
    setFilters({ type: "", date: "", location: "" });
    dispatch(filterEvents({ type: "", date: "", location: "" }));
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg mb-6 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold mb-4 text-purple-800 flex items-center gap-2">
        🎯 Filter Events
      </h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Type */}
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
        >
          <option value="">✨ All Types</option>
          <option value="Workshop">🛠 Workshop</option>
          <option value="Meetup">🤝 Meetup</option>
          <option value="Fitness">💪 Fitness</option>
          <option value="Music">🎵 Music</option>
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="📍 Search by location"
          value={filters.location}
          onChange={handleChange}
          className="border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
        />
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-end">
        <button
          onClick={applyFilters}
          className="px-5 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
        >
          ✅ Apply
        </button>
        <button
          onClick={resetFilters}
          className="px-5 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 shadow-md transition transform hover:-translate-y-1 cursor-pointer"
        >
          ♻️ Reset
        </button>
      </div>
    </div>
  );
}
