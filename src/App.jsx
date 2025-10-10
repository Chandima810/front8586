import React from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantList";
import RSVPForm from "./components/RSVPForm";

const App = () => {
  return (
    <div className="app-container">
      <h1>🎉 40th Anniversary - BSc Agriculture (85/86) Batch</h1>
      <ParticipantForm />
      <RSVPForm />
      <ParticipantList />
    </div>
  );
};

export default App;
