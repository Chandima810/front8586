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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>RSVP Status</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
                <td>{p.rsvp ? p.rsvp.status : "Not Responded"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ParticipantList;
