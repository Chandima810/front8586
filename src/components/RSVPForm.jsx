import React, { useState } from "react";
import { addOrUpdateRSVP } from "../api/api";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    participantId: "",
    status: "Yes",
    noOfGuests: 0,
    specialRequirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addOrUpdateRSVP(formData);
      alert("✅ RSVP updated successfully!");
      setFormData({
        participantId: "",
        status: "Yes",
        noOfGuests: 0,
        specialRequirements: "",
      });
    } catch (error) {
      alert("❌ Failed to update RSVP");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="participantId"
          placeholder="Participant ID"
          value={formData.participantId}
          onChange={handleChange}
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Maybe">Maybe</option>
        </select>
        <input
          type="number"
          name="noOfGuests"
          placeholder="Number of Guests"
          value={formData.noOfGuests}
          onChange={handleChange}
        />
        <textarea
          name="specialRequirements"
          placeholder="Special Requirements"
          value={formData.specialRequirements}
          onChange={handleChange}
        />
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
};

export default RSVPForm;
