import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "./eventsSlice";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    host: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Title is required";
    if (!formData.type) tempErrors.type = "Type is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.location) tempErrors.location = "Location is required";
    if (!formData.host) tempErrors.host = "Host is required";
    if (!formData.description) tempErrors.description = "Description is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addEvent(formData));
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl transform transition-all hover:shadow-3xl">
      <h2 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">🎉 Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Type */}
        <div>
          <label className="block font-semibold mb-1">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
          />
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        {/* Host */}
        <div>
          <label className="block font-semibold mb-1">Host</label>
          <input
            type="text"
            name="host"
            value={formData.host}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer"
          />
          {errors.host && <p className="text-red-500 text-sm mt-1">{errors.host}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-purple-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition cursor-pointer resize-none"
            rows={4}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:from-purple-600 hover:to-blue-500 transform transition hover:-translate-y-1 cursor-pointer"
        >
          🚀 Let's Go!
        </button>
      </form>
    </div>
  );
}
