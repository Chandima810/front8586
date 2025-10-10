import React, { useState } from "react";
import { addParticipant } from "../api/api";

const ParticipantForm = ({ onAddSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addParticipant(formData);
      alert("✅ Participant added successfully!");
      setFormData({ name: "", email: "", phone: "" });
      if (onAddSuccess) onAddSuccess();
    } catch (error) {
      alert("❌ Failed to add participant");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Participant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Add Participant</button>
      </form>
    </div>
  );
};

export default ParticipantForm;
