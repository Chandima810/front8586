import React, { useEffect, useState } from "react";
import { getParticipants } from "../api/api";

const ParticipantList = () => {
  const [participants, setParticipants] = useState([]);

  const loadParticipants = async () => {
    try {
      const data = await getParticipants();
      setParticipants(data);
    } catch (error) {
      console.error("❌ Error fetching participants:", error);
    }
  };

  useEffect(() => {
    loadParticipants();
  }, []);

  return (
    <div className="list-container">
      <h2>Participant List</h2>
      {participants.length === 0 ? (
        <p>No participants added yet.</p>
      ) : (
        participants.map((p) => (
          <div key={p.id} className="participant-card mb-6 p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p>Email: {p.email}</p>
            <p>Phone: {p.phone}</p>
            <p>RSVP Status: {p.rsvp ? p.rsvp.status : "Not Responded"}</p>

            {p.media && p.media.length > 0 && (
              <div className="media-gallery flex flex-wrap gap-2 mt-3">
                {p.media.map((file, idx) => (
                  <div key={idx} className="media-item">
                    {file.endsWith(".mp4") || file.endsWith(".mov") ? (
                      <video
                        src={`https://back8586.onrender.com${file}`}
                        controls
                        className="w-48 rounded"
                      />
                    ) : (
                      <img
                        src={`https://back8586.onrender.com${file}`}
                        alt="participant"
                        className="w-48 rounded"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ParticipantList;
