import React from "react";
import { useParams, Link } from "react-router-dom";

export default function RSVPConfirmation() {
  const { id } = useParams();

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🎉 RSVP Confirmed!</h2>
      <p className="text-gray-700 mb-6">
        You have successfully RSVP’d for Event #{id}.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Events
      </Link>
    </div>
  );
}
