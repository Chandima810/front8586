import React from "react";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantList";
import RSVPForm from "./components/RSVPForm";

const App = () => {
  return (
    <div className="app-container min-h-screen flex flex-col">
      {/* Main Content with bottom padding to avoid overlap */}
      <div className="flex-1 p-4 pb-20">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🎉 40th Anniversary - BSc Agriculture (85/86) Batch
        </h1>

        <ParticipantForm />
        <RSVPForm />
        <ParticipantList />
      </div>

      {/* Sticky Footer with transparency and shadow */}
      <footer className="w-full py-4 text-center text-sm text-gray-700 border-t bg-white/80 backdrop-blur-md fixed bottom-0 left-0 shadow-md">
        &copy; Chandima Gunasena 2025 October |{" "}
        <a
          href="https://solutionswaterminds.com"
          className="underline hover:text-blue-600"
        >
          solutionswaterminds.com
        </a>
      </footer>
    </div>
  );
};

export default App;
