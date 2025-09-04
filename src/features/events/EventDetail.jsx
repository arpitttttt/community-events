import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

export default function EventDetail() {
  const { id } = useParams();
  const event = useSelector((state) =>
    state.events.events.find((e) => e.id === parseInt(id))
  );

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-red-500">⚠️ Event not found</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateEmailForm = () => {
    let tempErrors = {};
    if (!userData.name) tempErrors.name = "Name is required";
    if (!userData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      tempErrors.email = "Invalid email address";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleConfirmJoin = async () => {
    if (!validateEmailForm()) return;

    try {
      await emailjs.send(
        "service_liaf93c",
        "template_swrg3t4",
         {
    user_name: userData.name,
    email: userData.email, 
    event_title: event.title,
    event_date: event.date,
    event_location: event.location,
    event_host: event.host,
    event_description: event.description,
  },
        "AFXvCJW5bpBnf5irJ",
      );

      setShowEmailForm(false);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send confirmation email. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg transform transition-all hover:shadow-2xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4">{event.title}</h1>

      <div className="space-y-2 text-gray-700">
        <p>🛠 <strong>Type:</strong> {event.type}</p>
        <p>📅 <strong>Date:</strong> {event.date}</p>
        <p>📍 <strong>Location:</strong> {event.location}</p>
        <p>👤 <strong>Host:</strong> {event.host}</p>
      </div>

      <p className="text-gray-700 mt-6 leading-relaxed">{event.description}</p>

      {/* Join Button */}
      {!showEmailForm && !showModal && (
        <button
          onClick={() => setShowEmailForm(true)}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-600 transform transition hover:-translate-y-1 cursor-pointer"
        >
          🎉 Join Event
        </button>
      )}

      {/* Email Form */}
      {showEmailForm && (
        <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-4 text-purple-800">RSVP for Event</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <button
              onClick={handleConfirmJoin}
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-3 rounded-2xl shadow-lg hover:from-purple-600 hover:to-blue-500 transform transition hover:-translate-y-1 cursor-pointer"
            >
              ✅ Confirm Join
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-3xl shadow-2xl max-w-sm w-full mx-4 text-center transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-3 text-purple-800">🎊 RSVP Confirmed!</h2>
            <p className="text-gray-700 mb-6">
              You have successfully RSVP'd for <b>{event.title}</b>. Check your email for confirmation.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-600 transform transition hover:-translate-y-1 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
