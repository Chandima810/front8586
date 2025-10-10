import axios from "axios";

// Base URL for your backend API
const API_BASE_URL = "http://localhost:5000/api";

// ---------------------- PARTICIPANTS ----------------------

// Add a new participant
export const addParticipant = async (participantData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/participants`, participantData);
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

// Add or update RSVP
export const addOrUpdateRSVP = async (rsvpData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/rsvp`, rsvpData);
    return response.data;
  } catch (error) {
    console.error("❌ Error adding/updating RSVP:", error);
    throw error;
  }
};

// Get RSVP by participantId
export const getRSVP = async (participantId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/rsvp/${participantId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching RSVP:", error);
    throw error;
  }
};
