import axios from "axios";
import { API_BASE_URL } from "../config.js"; // <-- make sure path matches your folder structure

// ---------------------- PARTICIPANTS ----------------------

// Add a new participant with optional media files
export const addParticipant = async (participantData, files = []) => {
  try {
    const formData = new FormData();

    // Append participant fields
    Object.keys(participantData).forEach((key) => {
      formData.append(key, participantData[key]);
    });

    // Append files if any (backend expects 'media' field)
    files.forEach((file) => formData.append("media", file));

    const response = await axios.post(`${API_BASE_URL}/participants`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("❌ Error adding participant:", error);
    throw error;
  }
};

// Get all participants
export const getParticipants = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/participants`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching participants:", error);
    throw error;
  }
};

// Get participant by ID
export const getParticipantById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/participants/${id}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching participant:", error);
    throw error;
  }
};

// ---------------------- RSVP ----------------------

// Add or update RSVP for a participant
export const addOrUpdateRSVP = async (rsvpData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/rsvp`, rsvpData);
    return response.data;
  } catch (error) {
    console.error("❌ Error adding/updating RSVP:", error);
    throw error;
  }
};

// Get RSVP by participant ID
export const getRSVP = async (participantId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/rsvp/${participantId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching RSVP:", error);
    throw error;
  }
};
