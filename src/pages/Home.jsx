import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

export default function Home() {
  const events = useSelector((state) => state.events.filteredEvents);

  
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center py-12 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Discover Amazing Local Events
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          Connect with your community through workshops, meetups, and activities
        </p>
      </div>

      {/* Filters Section */}
      <Filters />

      {/* Create Event Button */}
      <div className="mb-6 flex justify-start">
        <Link
          to="/create"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:from-purple-600 hover:to-blue-500 transform transition-all hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex items-center gap-2"
        >
          ➕ Create Event
        </Link>
      </div>

      {/* Event List */}
      {events.length === 0 ? (
        <p className="text-gray-500">No events match your filters.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {currentEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="block p-6 rounded-2xl shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-2xl transform transition-transform hover:-translate-y-1 cursor-pointer"
              >
                <h2 className="text-2xl font-bold text-purple-800 mb-2">{event.title}</h2>

                <p className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {event.type}
                </p>

                <p className="text-gray-600 mb-2">
                  📅 {event.date} • 📍 {event.location}
                </p>

                <p className="text-gray-700 mt-2 line-clamp-3">
                  {event.description}
                </p>

                <span className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-2xl shadow hover:from-purple-600 hover:to-blue-500 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  🔍 View Details
                </span>
              </Link>
            ))}
          </div>

          
{totalPages > 1 && (
  <div className="flex justify-center mt-8 gap-2 flex-wrap">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
          page === currentPage
            ? "bg-purple-600 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {page}
      </button>
    ))}
  </div>
)}

        </>
      )}
    </div>
  );
}
