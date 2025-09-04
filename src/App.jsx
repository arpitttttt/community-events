import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./features/events/EventDetail";
import RSVPConfirmation from "./pages/RSVPConfirmation";
import Navbar from "./components/Navbar";
import EventForm from "./features/events/EventForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-indigo-300 to-purple-100 font-sans">
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/confirmation" element={<RSVPConfirmation />} />
            <Route path="/create" element={<EventForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
