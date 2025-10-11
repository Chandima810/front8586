import React, { useState } from "react";
import { addParticipant } from "../api/api";

const ParticipantForm = ({ onAddSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addParticipant(formData, Array.from(files));
      alert("✅ Participant added successfully!");
      setFormData({ name: "", email: "", phone: "" });
      setFiles([]);
      if (onAddSuccess) onAddSuccess();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add participant");
    } finally {
      setLoading(false);
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
        <input
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add Participant"}
        </button>
      </form>
    </div>
  );
};

export default ParticipantForm;
